import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/config";

const getProductData = createAsyncThunk("api/productdata", async (data) => {
  return API.get("products", { params: data })
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      console.log(res, "err");
    });
});

const productInfoSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    totalPages: 0,
    isLoading: false,
    isError: false,
  },

  reducers: {},
  extraReducers: {
    [getProductData.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getProductData.fulfilled]: (state, { payload }) => {
        console.log('payload',payload);
      state.data = payload.data;
      state.totalPages = payload.totalPages;
      state.isError = false;
    },
    [getProductData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export { getProductData };

export default productInfoSlice.reducer;
