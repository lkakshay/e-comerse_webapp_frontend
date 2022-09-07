import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API from '../../api/config'


getProductData=createAsyncThunk('api/productdata',async(data)=>{

    return API.get(products,data)
    .then((res)=>{
        console.log(res,'res')
    })
    .catch((res)=>{
        console.log(res,'err')
    })

})

const productInfoSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },

  reducers:{

  },
  extraReducers:{
    [getProductData.pending]:(state)=>{


    },
    [getProductData.fullfilled]:(state,{payload})=>{

       console.log('payload',payload);

    },
    [getProductData.rejected]:(state)=>{

    }
  }
});
