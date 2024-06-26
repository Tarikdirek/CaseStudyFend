import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RemoveRoleRequest } from '../../models/roleModel/requests/removeRoleRequest';
import axiosInstance from '../../core/utilities/axiosInterceptors';

interface RemoveRole {
  data: RemoveRoleRequest | null;
}

const initialState: RemoveRole = {
  data: null,
};

export const removeRole = createAsyncThunk(
  'removeRole',
  async (removeRole: RemoveRoleRequest, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('users/removerolefromuser', removeRole);
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

const removeRoleSlice = createSlice({
  name: 'addRole',
  initialState,
  reducers: {  },
  extraReducers: (builder) => {
    builder
      .addCase(removeRole.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },
});

export default removeRoleSlice.reducer;
