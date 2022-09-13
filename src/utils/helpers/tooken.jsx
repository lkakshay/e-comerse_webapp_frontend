export const token=()=>{
    const Data=JSON.parse(sessionStorage.getItem("persist:user"))
    if(Data===null)
    return "undefined"
    
    const userData=JSON.parse(Data.userData)
     
    if(userData){
        return userData.token
    }
    return "undefined"
}