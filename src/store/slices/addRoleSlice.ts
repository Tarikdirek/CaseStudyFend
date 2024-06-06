import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AddRoleRequest } from '../../models/roleModel/requests/addRoleRequest';

interface AddRole {
  data: AddRoleRequest | null;
}

const initialState: AddRole = {
  data: null,
};

export const addRole = createAsyncThunk(
  'addRole',
  async (addRole: AddRoleRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/roles/add', addRole);
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

const addRoleSlice = createSlice({
  name: 'addRole',
  initialState,
  reducers: {  },
  extraReducers: (builder) => {
    builder
      .addCase(addRole.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },
});

export default addRoleSlice.reducer;
