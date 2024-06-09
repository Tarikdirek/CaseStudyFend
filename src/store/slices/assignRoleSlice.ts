import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginRequest } from '../../models/authModel/requests/loginRequest';
import { AssignRoleRequest } from '../../models/roleModel/requests/assignRoleRequest';
import axiosInstance from '../../core/utilities/axiosInterceptors';

interface AssignRole {
  data: AssignRoleRequest | null;
}

const initialState: AssignRole = {
  data: null,
};

export const postAssignRole = createAsyncThunk(
  'postAssignRole',
  async (assignRoleRequest: AssignRoleRequest, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('users/assignroletouser', assignRoleRequest);
      return response.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const assignRoleSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(postAssignRole.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },
});


export default assignRoleSlice.reducer;
