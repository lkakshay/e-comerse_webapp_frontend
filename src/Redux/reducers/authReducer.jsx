import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/config";

var data = [];

const postAuthData = createAsyncThunk("api/login", async (data) => {
  API.get("products")
    .then((res) => {
      data = res.data;
    })
    .catch((err) => console.log(err));
});

const createAuthData = createAsyncThunk("api/register", async (data) => {

  return API.post("register",data)
    .then((res) => {
     console.log('res',res);
    })
    .catch((err) => {

      console.log(err)
       if('err',err.response.status===444){
        return err.response.data[0]
       }
    });
});

const authInfoSlice = createSlice({
  name: "auth",
  initialState: {
    authStatus: false,
    userData: {},
    isLoading: false,
    isError: false,
    loginPopUp: false,
  },

  reducers: {
    openLoginPopUP: (state) => {
      state.loginPopUp = true;
    },
    closeLoginPopUP: (state) => {
      state.loginPopUp = false;
    },
  },
  extraReducers: {},
});

export const { openLoginPopUP,closeLoginPopUP } = authInfoSlice.actions;
export { postAuthData,createAuthData };
export default authInfoSlice.reducer;

// let obj={}
// for(let i=0;i<data.length;i++){

//  let a=data[i].category

//  if(obj[a]===undefined){
//      obj[a]={}
//  }

// }

// console.log(obj)

// for(let i=0;i<data.length;i++){

//  let a=data[i].category
//  let b=data[i].sub_category

//  for( let x in obj){

//      if(x==a){
//          if(obj[x][b]===undefined){
//              obj[x][b]=1
//          }
//          else{
//              obj[x][b]+=1
//          }
//      }

//  }

// }
