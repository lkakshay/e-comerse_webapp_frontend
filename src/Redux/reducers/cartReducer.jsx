import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/config";
import { token } from "../../utils/helpers/tooken";

const getCartData = createAsyncThunk("api/cartdata", async () => {
    return API.get("cart/items",{headers: { Authorization: `Bearer ${token()}` }})
      .then((res) => {
        return res.data;
      })
      .catch((res) => {
        console.log(res, "err");
      });
  });

const cartInfoSlice=createSlice({
    name:'cart',
    initialState:{
        data:[],
        isLoading: false,
        isError: false,
    },
    reducers:{},
    extraReducers: {
        [getCartData.pending]: (state) => {
          state.isLoading = true;
          state.isError = false;
        },
        [getCartData.fulfilled]: (state, { payload }) => {
          state.isLoading = false;
          state.data = payload
          state.isError = false;
        },
        [getCartData.rejected]: (state) => {
          state.isLoading = false;
          state.isError = true;
        },
      },

})

export  {getCartData}

export default cartInfoSlice.reducer