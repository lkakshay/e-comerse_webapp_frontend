
import axios from "axios"
let token=1


 export default axios.create({
    baseURL:'http://localhost:5000/api/',



    // headers:{Authorization: `Bearer ${token}`,
    // "Access-Control-Allow-Origin": "http://localhost:3000/"}
})

