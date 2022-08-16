import { Route ,Routes} from "react-router-dom"
import { Admin } from "../Pages/admin"
import { Home } from "../Pages/home"


export const ManiRoutes=()=>{
    return(
        <Routes>
            <Route path="/ad" element={<Admin/>}/>
            <Route path="/" element={<Home/>}/>
            
            
        </Routes>
    )
}