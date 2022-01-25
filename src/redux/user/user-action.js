import userTypes from "./usertypes";

export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});
