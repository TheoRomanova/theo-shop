import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiLoginDataType, AuthApi } from "../../api/auth.api";

export const LogInThunk = createAsyncThunk(
  "auth/logIn",
  async (
    { email, password, rememberMe }: ApiLoginDataType,
    { dispatch }
  ): Promise<any> => {
    try {
      const response = await AuthApi.logIn({ email, password, rememberMe });
      console.log(response.resultCode);
      if (response.resultCode === 0) {
        if (response.resultCode === 0) {
          dispatch(GetAuthThunk());
          return { email, password, rememberMe };
        }
      } else {
        //вызвать капчу
        console.log("LogInThunk Error");
      }
    } catch (err) {
      throw err;
    }
  }
);

export const GetAuthThunk = createAsyncThunk(
  "auth/getAuth",
  async (data, { dispatch }): Promise<any> => {
    try {
      const response = await AuthApi.getAuth();
      console.log(response);
      if (response.resultCode === 0) {
        return response.data;
      }
      if (response.resultCode === 1) {
        return response.messages;
      }
    } catch (err) {
      return err;
    }
  }
);

export const DeleteLoginThunk = createAsyncThunk(
  "auth/getAuth",
  async (data, { dispatch }): Promise<any> => {
    try {
      const response = await AuthApi.logout();
      console.log(response);
      if (response.resultCode === 0) {
        return response.data;
      }
      if (response.resultCode === 1) {
        return response.messages;
      }
    } catch (err) {
      return err;
    }
  }
);
