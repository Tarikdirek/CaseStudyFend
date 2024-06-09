import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserResponse } from "../../models/userModel/responses/getUserResponse";
import axiosInstance from "../../core/utilities/axiosInterceptors";


interface GetUser {
  data: GetUserResponse | null;
}

const initialState: GetUser = {
  data: null,
};

export const getUser = createAsyncThunk(
  "getUser",
  async (name: string | undefined) => {
    const response = await axiosInstance.get<GetUserResponse>(
      `users/getbyname?name=${name}`
    );
    return response.data;
  }
);

const getUserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.data = action.payload;
      })
 
  },
});

export default getUserSlice.reducer;