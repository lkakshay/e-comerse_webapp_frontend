import { useDispatch, useSelector } from "react-redux";
import { openLoginPopUP } from "../Redux/reducers/authReducer";

export const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.authReducer.authStatus);

  if (!auth) {
    dispatch(openLoginPopUP());
    return
  } else {
    return children;
  }
};
