import * as type from "../Actions/Types";

const initailState = {
  currentUser: "",
  
  token: "",
};
const User = (state = initailState, action) => {
  switch (action.type) {
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
      };
    case type.FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
   

    case type.GET_USER_PERSONAL_INFORMATION:
      let curUser = {
        fullName: action.payload.fullName,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
        deliveryAddress: action.payload.deliveryAddress,
      };

      return {
        ...state,
        currentUser: curUser,
      };

    case type.LOGOUT:
      return {
        ...state,
        currentUser: null,
        token: "",
      };

    default:
      return state;
  }
};

export default User;
