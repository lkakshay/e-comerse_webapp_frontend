import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { closeLoginPopUP } from "../Redux/reducers/authReducer";
import { createAuthData,postAuthData } from "../Redux/reducers/authReducer";
import Alert from "@mui/material/Alert";

export const Login = () => {
  const screenSize = useSelector((state) => state.MediaqueryReducer.screenSize);
  const loginPopUp = useSelector((state) => state.authReducer.loginPopUp);
  const dispatch = useDispatch();

  const [dimension, setdimension] = useState({ width: "", htype: "h3" });
  const [user, setUser] = useState(false);
  



  //sign up

  const [signUpvalidation, setSignUpvalidation] = useState({
    error: false,
    msg: "",
    show: false,
  });

  const [signUpData, setSingnUpData] = useState({});
  const handleSignUp = () => {
    dispatch(createAuthData(signUpData)).then(({ payload }) => {
      
      if (payload === "success") {
        
          setSignUpvalidation({
            ...signUpvalidation,
            msg: payload,
            show: true,
            error: false,
          });
          setTimeout(()=>{
            setUser(false)
          },1500);
          
          
          return;
        }
      

      setSignUpvalidation({ ...signUpvalidation, msg: payload, show: true, error: true });
      
    });
  };
  

  //login
  const [loginValidation, setLoginValidation] = useState({
    error: false,
    show: false,
  });
  const [loginData, setLoginData] = useState({});
  const handleLogin = () => {
    dispatch(postAuthData(loginData))
    .then(({ payload }) => {

      
      if (payload.status === 200) {
        
          setLoginValidation({
            ...loginValidation,
            show: true,
            error: false,
          });
          setTimeout(()=>{

            dispatch(closeLoginPopUP())
           
            
          },1500);
          
          return;
        
      }

      setLoginValidation({ ...loginValidation, show: true, error: true });
    });
  };
  
  

  const handleClose = () => dispatch(closeLoginPopUP());

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: dimension.width,

    bgcolor: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    p: 4,
    borderRadius: "1%",
  };

  useEffect(() => {
    if (screenSize === "lg") setdimension({ ...dimension, width: "450px" });
    else if (screenSize === "sm")
      setdimension({ ...dimension, width: "400px" });
    else if (screenSize === "sx")
      setdimension({ ...dimension, width: "250px", htype: "h4" });
  }, [screenSize]);


  useEffect(()=>{
    setSignUpvalidation({...signUpvalidation,show:false})
    setLoginValidation({...loginValidation,show:false})
  },[signUpData,loginData])
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={loginPopUp}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={loginPopUp}>
          <Box sx={style}>
            {user ? (
              <Box>
                <Typography variant="body1" align="right">
                  English(USA)
                </Typography>
                <Typography sx={{ mt: 3 }} variant="h6" component="h1">
                  START FOR FREE
                </Typography>
                <Typography
                  sx={{ mt: 1, fontWeight: "600", color: "#00081c" }}
                  variant={dimension.htype}
                  component="h1"
                >
                  Sign up to Ecom.
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Already a member?
                  </Typography>

                  <Typography
                    onClick={() => {
                      setUser(false)
                      setLoginValidation({...loginValidation,show:false})
                      setSingnUpData({})}}
                    variant="h6"
                    sx={{ mt: 2, ml: 1, mb: 5, color: "#3B44F6" }}
                  >
                    Log in
                  </Typography>
                </Box>
                <Grid
                  sx={{
                    display: "grid",
                    gap: 3,
                  }}
                >
                  <TextField
                    label="Name"
                    type="text"
                    fullWidth
                    onChange={(e) =>
                      setSingnUpData({ ...signUpData, name: e.target.value })
                    }
                  />
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    onChange={(e) =>
                      setSingnUpData({ ...signUpData, email: e.target.value })
                    }
                  />
                  <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    helperText="Must contain at least  8 characters"
                    onChange={(e) =>
                      setSingnUpData({
                        ...signUpData,
                        password: e.target.value,
                      })
                    }
                  />
                </Grid>

                {signUpvalidation.show ? (
                  <div style={{marginTop:'10px'}}>
                    {signUpvalidation.error ? (
                      <Alert severity="warning">
                        {signUpvalidation.msg}
                      </Alert>
                    ) : (
                      <Alert severity="success">
                        Registration Successfull
                      </Alert>
                    )}
                  </div>
                ) : (
                  <></>
                )}

                <Button
                  onClick={handleSignUp}
                  sx={{ mt: 3, mb: 3, backgroundColor: "#00081c" }}
                  color={!signUpvalidation.error?"success":'error'}
                  variant="contained"
                  fullWidth
                  size="large"
                >
                  sign up
                </Button>
              </Box>
            ) : (
              <Box>
                <Typography variant="body1" align="right">
                  English(USA)
                </Typography>

                <Typography
                  sx={{ mt: 1, fontWeight: "600", color: "#00081c" }}
                  variant={dimension.htype}
                  component="h1"
                >
                  Log in to Ecom.
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    New user?
                  </Typography>

                  <Typography
                    
                    onClick={() => {
                      setUser(true)
                      setSignUpvalidation({...signUpvalidation,show:false})}}
                    variant="h6"
                    sx={{ mt: 2, ml: 1, mb: 5, color: "#3B44F6" }}
                  >
                    Sign up
                  </Typography>
                </Box>
                <Grid
                  sx={{
                    display: "grid",
                    gap: 3,
                  }}
                >
                  <TextField

                    label="Email"
                    type="email"
                    autoComplete="current-email"
                    fullWidth
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                  <TextField
                    label="Password"
                    type="Password"
                    autoComplete="current-password"
                    fullWidth
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                  />
                </Grid>

                {loginValidation.show ? (
                  <div style={{marginTop:'10px'}}>
                    {loginValidation.error ? (
                      <Alert severity="error">
                        Credentials Not Found
                      </Alert>
                    ) : (
                      <Alert severity="success">
                        Login Successfull
                      </Alert>
                    )}
                  </div>
                ) : (
                  <></>
                )}

                <Button
                  sx={{ mt: 3, mb: 3, backgroundColor: "#00081c" }}
                  color={!loginValidation.error?"success":'error'}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleLogin}
                >
                  sign in
                </Button>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
