import request from "~/utils/request";
import authSlice from "~/pages/Authentication/authSlice";
import config from "~/config";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(authSlice.actions.loginStart);
  try {
    const res = await request.post("users/login", user);
    dispatch(authSlice.actions.loginSuccess(res.data));
    if (res.data.account) {
      navigate(config.routes.home);
    }
    alert(res.data.message);
  } catch (error) {
    dispatch(authSlice.actions.loginFailed);
    console.log(error);
  }
};
