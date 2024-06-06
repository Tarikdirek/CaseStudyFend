import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { LoginRequest } from '../../models/authModel/requests/loginRequest';

interface LogIn {
  data: LoginRequest | null;
  setSignedIn: boolean;
}

const initialState: LogIn = {
  data: null,
  setSignedIn: localStorage.getItem('isSignedIn') === 'true' || false,
};

export const postLogIn = createAsyncThunk(
  'login/postLogIn',
  async (logInRequest: LoginRequest, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', logInRequest);
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

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isSignedIn(state, action) {
      state.setSignedIn = action.payload;
      localStorage.setItem('isSignedIn', action.payload.toString());
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postLogIn.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },
});

export const { isSignedIn } = loginSlice.actions;
export default loginSlice.reducer;
