// src/components/LoginCard.tsx

import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormikInput from "./FormikInput";
import { Button, Card } from "react-bootstrap";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { LoginRequest } from "../models/authModel/requests/loginRequest";
import { isSignedIn, postLogIn } from "../store/slices/loginSlice";
import authService from "../services/authService";
import tokenService from "../services/tokenService";
import { getUser } from "../store/slices/getUserSlice";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().min(6, "Too Short!").required("Required"),
});



const LoginCard: React.FC = () => {
const dispatch:ThunkDispatch<any, any, Action> = useAppDispatch(); 
const user = useAppSelector((state) => state.getUser.data);
const navigate = useNavigate();
console.log(user)

  return (
    <Card className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Card.Body>
        <h3 className="text-center">Login</h3>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={LoginSchema}

          onSubmit={ async(values:LoginRequest,{resetForm}) => {
            resetForm();
            await dispatch(postLogIn(values));
            await authService.authenticate(values);
            await dispatch(getUser(tokenService.decodeToken()?.sub))
            if(tokenService.decodeToken()?.sub === undefined){
              console.log("Incorrect email or password ")
            }else{
              toastr.success("Login Successfull")
              dispatch(isSignedIn(true));
              navigate("/adminpanel");
            }

            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormikInput
                label="Username"
                name="username"
                type="text"
                placeholder="Enter your username"
                htmlFor="username"
              />
              <FormikInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                htmlFor="password"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-100 mt-3"
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
};

export default LoginCard;
