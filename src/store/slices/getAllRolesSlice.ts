import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllRolesResponse } from "../../models/roleModel/responses/getAllRolesResponse";
import axios from "axios";


interface GetAllRoles {
  data: GetAllRolesResponse[] | null;
}

const initialState: GetAllRoles = {
  data: null,
};

export const getAllRoles = createAsyncThunk(
  "getAllRoles",
  async () => {
    const response = await axios.get<GetAllRolesResponse[]>(
      `http://localhost:8080/api/v1/roles/getall`
    );
    return response.data;
  }
);

const getAllRolesSlice = createSlice({
  name: "getAllRoles",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.data = action.payload;
      })
 
  },
});

export default getAllRolesSlice.reducer;