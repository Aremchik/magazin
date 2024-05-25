// store/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  token: string | null;
  userid: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  userid: null,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { email: string; password: string }) => {
    const response = await axios.post(
      "https://localhost:7289/api/Catalog/login",
      credentials
    );
    console.log(response.data);
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (details: { username: string; email: string; password: string }) => {
    const response = await axios.post(
      "https://localhost:7289/api/Catalog/register",
      details
    );
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logoutUser: (state) => {
      state.token = null;
      state.userid = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userid = action.payload.userid;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Login failed";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.userid = action.payload.userid;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Registration failed";
      });
  },
});

export const { setToken, logoutUser } = authSlice.actions;
export default authSlice.reducer;
