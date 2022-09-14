import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../api/config";
import { token } from "../../utils/helpers/tooken";

const getCartData = createAsyncThunk("api/cartdata", async () => {
  return API.get("cart/items", {
    headers: { Authorization: `Bearer ${token()}` },
  })
    .then((res) => {

      return res.data;
    })
    .catch((res) => {
      console.log(res, "err");
    });
});

const getLaterData = createAsyncThunk("api/laterdata", async () => {
  return API.get("cart/later/items", {
    headers: { Authorization: `Bearer ${token()}` },
  })
    .then((res) => {
      return res.data;
    })
    .catch((res) => {
      console.log(res, "err");
    });
});

const editCartItem = createAsyncThunk(
  "api/update/cartitem",
  async ({ id, data }) => {
    return API.patch(
      "cart/update?id=" + id,
      { updateData: data },
      { headers: { Authorization: `Bearer ${token()}` } }
    )
      .then((res) => {
       return res.data
      })
      .catch((res) => {
        return res
      });
  }
);
const deleteCartItem = createAsyncThunk(
    "api/delete/cartitem",
    async (id) => {
      return API.delete(
        "cart/delete?id="+ id,
        { headers: { Authorization: `Bearer ${token()}` } }
      )
        .then((res) => {
         return res.data
        })
        .catch((res) => {
          return res
        });
    }
  );


const editAndUpdateCart=({id,data})=>(dispatch)=>{
    dispatch(editCartItem({id,data}))
    .then(()=>{
        dispatch(getCartData())
        dispatch(getLaterData())
    })
}

const deleteAndUpdateCart=(id)=>(dispatch)=>{
    dispatch(deleteCartItem(id))
    .then(()=>{
        dispatch(getCartData())
        dispatch(getLaterData())
    })
}


const cartInfoSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
    laterData: [],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: {
    [getCartData.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getCartData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cartData = payload;
      state.isError = false;
    },
    [getCartData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    [getLaterData.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getLaterData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.laterData = payload;
      state.isError = false;
    },
    [getLaterData.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export { getCartData, editCartItem,getLaterData,editAndUpdateCart,deleteAndUpdateCart };

export default cartInfoSlice.reducer;
