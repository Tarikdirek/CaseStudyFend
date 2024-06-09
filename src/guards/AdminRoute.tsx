import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { useNavigate } from "react-router-dom";
import { getUser } from '../store/slices/getUserSlice';
import tokenService from '../services/tokenService';

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const credential = useAppSelector(state => state.getUser.data?.roleName);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            await dispatch(getUser(tokenService.decodeToken()?.sub));
            setIsLoading(false);
        };

        fetchUser();
    }, [dispatch]);

    useEffect(() => {
        if (!isLoading) {
            if (!credential || !credential.includes("manager")) {
                navigate("/homepage");
            }
        }
    }, [credential, isLoading, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default AdminRoute;
