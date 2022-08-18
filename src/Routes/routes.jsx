import { Route ,Routes} from "react-router-dom"
import { Cart } from "../Pages/cart"
import { Admin } from "../Pages/admin"
import { Home } from "../Pages/home"
import { Products } from "../Pages/products"
import { Singleproduct } from "../Pages/singleproduct"


export const ManiRoutes=()=>{
    return(
        <Routes>
            <Route path="/ad" element={<Admin/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<Singleproduct/>}/>
            <Route path="/cart" element={<Cart/>}/>     
        </Routes>
    )
}