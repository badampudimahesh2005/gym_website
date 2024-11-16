import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, 
  isAuthenticated: false, 
 
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   
    setUserData(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },

    // Action to log out the user
    logoutUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
    
   
  },
});

export const { setUserData, logoutUser } = userSlice.actions;

export default userSlice.reducer;
