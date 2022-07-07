import { Route ,Routes} from "react-router-dom"
import { Admin } from "../Pages/admin"


export const ManiRoutes=()=>{
    return(
        <Routes>
            <Route path="/ad" element={<Admin/>}/>
            
            
        </Routes>
    )
}