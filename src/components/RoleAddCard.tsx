// src/components/LoginCard.tsx

import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import FormikInput from "./FormikInput";
import { Button, Card } from "react-bootstrap";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { useAppDispatch } from "../store/configureStore";
import { AddRoleRequest } from "../models/roleModel/requests/addRoleRequest";
import { addRole } from "../store/slices/addRoleSlice";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RoleAddSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().min(6, "Too Short!").required("Required"),
});

const RoleAddCard: React.FC = () => {
  const dispatch: ThunkDispatch<any, any, Action> = useAppDispatch(); 

  return (
    <Card className="p-4" style={{ maxWidth: "400px", margin: "0 auto" }}>
      <Card.Body>
        <h3 className="text-center">Create Role</h3>
        <Formik
          initialValues={{ name: "", description: "" }}
          validationSchema={RoleAddSchema}
          onSubmit={ async (values: AddRoleRequest, { resetForm }) => {
            const resultAction = await dispatch(addRole(values));
            if (addRole.fulfilled.match(resultAction)) {
              toast.success("Role successfully created!");
            } else {
              toast.error("Error creating role.");
            }
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormikInput
                label="Name"
                name="name"
                type="text"
                placeholder="Enter a role name"
                htmlFor="name"
              />
              <FormikInput
                label="Description"
                name="description"
                type="text"
                placeholder="Enter the role description"
                htmlFor="password"
              />
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-100 mt-3"
              >
                Create Role
              </Button>
            </Form>
          )}
        </Formik>
        <ToastContainer />
      </Card.Body>
    </Card>
  );
};

export default RoleAddCard;
