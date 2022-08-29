import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../api/config";


var data=[]

const postAuthData=createAsyncThunk('api/login',async(data)=>{
  

   API.get('products').then((res)=>{
   data=res.data
  

   let obj={}
   for(let i=0;i<data.length;i++){

    let a=data[i].category

    if(obj[a]===undefined){
        obj[a]={}
    }

   }

   console.log(obj)


   for(let i=0;i<data.length;i++){

    let a=data[i].category
    let b=data[i].category__1

    for( let x in obj){

        if(x==a){
            if(obj[x][b]===undefined){
                obj[x][b]=1
            }
            else{
                obj[x][b]+=1
            }
        }

    }

   }







   }).catch((err)=>console.log(err))
      
})




const authInfoSlice=createSlice({
    name:'auth',
    initialState:{
    authStatus:false,
    userData:{},
    isLoading:false,
    isError:false
    },
    extraReducers:{

    }

})

export {postAuthData}
export default authInfoSlice.reducer