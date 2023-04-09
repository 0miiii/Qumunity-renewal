import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  saveAccessTokenInLocalStorage,
  deleteAccessTokenFromLocalStorage,
} from "../../utils/tokenHandler";

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      saveAccessTokenInLocalStorage(action.payload);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      deleteAccessTokenFromLocalStorage();
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
