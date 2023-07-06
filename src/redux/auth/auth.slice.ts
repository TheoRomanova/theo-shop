import { createSlice } from "@reduxjs/toolkit";
import { GetAuthThunk, LogInThunk } from "./auth.thunk";

interface State {
  email: string;
  password: string;
  rememberMe: boolean;
  userId?: number | null;
  login: string;
  errorMessages: Array<string>;
}
const initialState: State = {
  email: "",
  password: "",
  rememberMe: false,
  userId: null,
  login: "",
  errorMessages: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //   setLoading: (state: State, action) => {
    //     state.isLoading = action.payload;
    //   },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LogInThunk.fulfilled, (state, action) => {
        state.email = action.payload.email;
        state.password = action.payload.password;
        state.rememberMe = action.payload.rememberMe;

        // state.errorMessages = action.payload.messages;
        console.log("LogInThunk fulfilled!", action.payload);
      })
      .addCase(LogInThunk.rejected, (state, action) => {
        console.log("LogInThunk rejected!", action.error);
      })

      .addCase(GetAuthThunk.fulfilled, (state, action) => {
        console.log("GetAuthThunk fulfilled!", action.payload);
        state.userId = action.payload.id;
        state.login = action.payload.login;
        state.email = action.payload.email;
      })
      .addCase(GetAuthThunk.rejected, (state, action) => {
        console.log("GetAuthThunk rejected!", action.error);
      });
  },
});

// export const { setLoading } = productsSlice.actions;
export default authSlice.reducer;
