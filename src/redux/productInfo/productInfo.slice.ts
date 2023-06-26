import { createSlice } from "@reduxjs/toolkit";
import { getProductInfoThunk } from "./productInfo.thunk";

interface State {
  profuctInfo: {
    aboutMe: string;
    sizeAndFit: string | null;
    careInfo: string;
  };
  poductInfoIsLoaded: boolean;
}
const initialState: State = {
  profuctInfo: {
    aboutMe: "",
    sizeAndFit: null,
    careInfo: "",
  },
  poductInfoIsLoaded: false,
};

const productInfoSlice = createSlice({
  name: "productInfo",
  initialState,
  reducers: {
    //   setLoading: (state: State, action) => {
    //     state.isLoading = action.payload;
    //   },
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

// export const { setLoading } = productsSlice.actions;
export default productInfoSlice.reducer;
