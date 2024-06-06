import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import loginSlice from "./slices/loginSlice";
import getUserSlice from "./slices/getUserSlice";
import addRoleSlice from "./slices/addRoleSlice";
import getAllUsersSlice from "./slices/getAllUsersSlice";
import getAllRolesSlice from "./slices/getAllRolesSlice";
import assignRoleSlice from "./slices/assignRoleSlice";
import removeRoleSlice from "./slices/removeRoleSlice";

export const store = configureStore({
    reducer:{
        login:loginSlice,
        getUser:getUserSlice,
        getAllUsers:getAllUsersSlice,
        addRole:addRoleSlice,
        getAllRoles:getAllRolesSlice,
        assignRole:assignRoleSlice,
        removeRole:removeRoleSlice

    }
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;


