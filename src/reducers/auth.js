import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    token: "",
  },

  reducers: {
    authLoginAction: (state, action) => {
      state.token = action.payload.token;
      console.log('data login:', state.token);
    },
    authLogoutAction: (state, action) => {
      localStorage.removeItem("userlogin");
      state.token = "";
      console.log('data logout:', state.token);
    },
  },
});

// Export action function nya
export const { authLoginAction, authLogoutAction } = authSlice.actions; // fungsi di dalam property reducers

// Export reducersnya
export default authSlice.reducer;
