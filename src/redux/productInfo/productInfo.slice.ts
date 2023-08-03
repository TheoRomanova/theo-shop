import { createSlice } from "@reduxjs/toolkit";
import { getProductInfoThunk } from "./productInfo.thunk";
import { ProductState } from "./types";

const initialState: ProductState = {
  profuctInfo: {
    aboutMe: "",
    sizeAndFit: null,
    careInfo: "",
  },
  currentProductId: null,
  poductInfoIsLoaded: false,
};

const productInfoSlice = createSlice({
  name: "productInfo",
  initialState,
  reducers: {
    setCurrentProductId: (state: ProductState, action) => {
      state.currentProductId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductInfoThunk.fulfilled, (state, action) => {
        console.log("getProductInfoThunk fulfilled!", action.payload);
        state.profuctInfo.aboutMe = action.payload.aboutMe;
        state.profuctInfo.sizeAndFit = action.payload.sizeAndFit;
        state.profuctInfo.careInfo = action.payload.careInfo;
        state.poductInfoIsLoaded = true;
      })
      .addCase(getProductInfoThunk.rejected, (state, action) => {
        console.log("getProductInfoThunk rejected!", action.error);
      });
  },
});

export const { setCurrentProductId } = productInfoSlice.actions;
export default productInfoSlice.reducer;
