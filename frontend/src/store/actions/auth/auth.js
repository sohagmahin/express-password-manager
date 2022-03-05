import * as actionTypes from "../actionTypes";
import { getTodo, postSingIn, postSingUp } from "../api";

const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
const authSuccess = (data) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    data: data,
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const singIn = (userName, password) => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      let response = await postSingIn(userName, password);
      console.log("===sing-in response====");
      console.log(response.data);
      dispatch(authSuccess(response.data));
    } catch (err) {
      dispatch(authFail({ message: err.message }));
    }
  };
};

export const singUp = (name, userName, password) => {
  return async (dispatch) => {
    dispatch(authStart());
    try {
      let response = await postSingUp(name, userName, password);
      console.log("===sign-up response====");
      console.log(response.data);
      dispatch(authSuccess(response.data));
    } catch (err) {
      dispatch(authFail({ message: err.message }));
    }
  };
};
