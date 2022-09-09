import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};



const register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await axios.post("/users/signup", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 400) {
      toast.error("You are already registered, please try to login", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } else if (codeError === 500) {
      toast.error("Server error! Please try later!", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } else {
      toast.error("Something went wrong!");
    }
  }
});



const logIn = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 400) {
      toast.error("Invalid address and/or password specified.", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    }
  }
});



const logOut = createAsyncThunk("auth/logout", async (credentials) => {
  try {
    await axios.post("/users/logout", credentials);
    token.unset();
  } catch (error) {
    const codeError = error.response.status;
    if (codeError === 500) {
      toast.error("Something happened to the server", {
        position: toast.POSITION.TOP_RIGHT,
        theme: "dark",
      });
    } else {
      toast.error("Something went wrong!");
    }
  }
});



const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch {
      token.unset();
      toast.warn("Authorization timed out! Please authenticate again!");
    }
  }
);

const operations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default operations;