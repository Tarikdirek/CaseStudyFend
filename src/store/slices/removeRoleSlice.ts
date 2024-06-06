import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RemoveRoleRequest } from '../../models/roleModel/requests/removeRoleRequest';

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
      const response = await axios.post('http://localhost:8080/api/v1/users/removerolefromuser', removeRole);
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
