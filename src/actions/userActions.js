import axios from "axios";

import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS } from "./types";
export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/user/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      //   dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      console.log(res);
      //   history.push("/");
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.error,
      });
    });
};

const setAuthorizationHeader = (JWTtoken) => {
  const token = `Bearer ${JWTtoken}`;
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = token;
};
