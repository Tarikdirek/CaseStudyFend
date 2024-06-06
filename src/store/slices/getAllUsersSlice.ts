import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserResponse } from "../../models/userModel/responses/getUserResponse";
import axios from "axios";


interface GetAllUsers {
  data: GetUserResponse[] | null;
}

const initialState: GetAllUsers = {
  data: null,
};

export const getAllUsers = createAsyncThunk(
  "getAllUsers",
  async () => {
    const response = await axios.get<GetUserResponse[]>(
      `http://localhost:8080/api/v1/users/getall`
    );
    return response.data;
  }
);

const getAllUsersSlice = createSlice({
  name: "getAllUsers",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.data = action.payload;
      })
 
  },
});

export default getAllUsersSlice.reducer;