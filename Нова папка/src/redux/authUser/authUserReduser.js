import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authUserApi';
const initialState = {

  
  user: {
    name: null,
    email: null
  },
  token: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;

    },
     [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchCurrentUser = false;
    },
  }
})


export default authSlice;