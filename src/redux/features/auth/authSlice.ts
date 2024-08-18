import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface TAuthState {
  user?: null | object;
  token?: null | string;
}
export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};
const initialState: TAuthState = {
  user: null,
  token: null,
};
const authSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSLice.actions;
export default authSLice.reducer;
export const useCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;
