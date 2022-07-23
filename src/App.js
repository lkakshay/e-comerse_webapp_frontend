
import './App.css';
import { Login } from './Pages/login';
import { ManiRoutes } from './Routes/routes';
import { Navbar } from './Components/navbar';
import { useTheme } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { setScreen } from './Redux/reducers/MediaqueryReducer';
import { Footer } from './Components/footer';



function App() {
    const dispatch=useDispatch()


    const theme=useTheme()
    const small=useMediaQuery(theme.breakpoints.down("sm"))
    const medium=useMediaQuery(theme.breakpoints.only("sm"))
    const large=useMediaQuery(theme.breakpoints.up("md"))

    useEffect(()=>{
        if(small)
        dispatch(setScreen("sx"))
        else if(medium)
        dispatch(setScreen("sm"))
        else if(large)
        dispatch(setScreen("lg"))
       
    },[small,medium,large])
  
  return (
    <div>
       {/* <Login/> */}
       <Navbar/>
       
      {/* <ManiRoutes/> */}
      <Footer/>
     
    </div>
  )
}

export default App;
