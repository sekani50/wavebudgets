// Action Creators
import * as type from "./Types";
import axios from "../../Utils/useAxios";
import toast from "react-hot-toast";
import { generateRandomID } from "Utils/helpers";

const GetUsersSuccess = (data) => {
  return {
    type: type.FETCH_USER_SUCCESS,
    payload: data,
  };
};

const loginSuccess = (data) => {
  return {
    type: type.LOGIN_SUCCESS,
    payload: data,
  };
};
const logout = () => {
  return {
    type: type.LOGOUT,
  };
};

const IncreaseCount = (data) => {
  return {
    type: type.GET_ITEMS_COUNT_INCREMENT,
    payload: data,
  };
};

const decreaseCount = (data) => {
  return {
    type: type.GET_ITEMS_COUNT_DECREMENT,
    payload: data,
  };
};

const getFoodItem = (data) => {
  return {
    type: type.GET_FOOD_ITEMS,
    payload: data,
  };
};

const sumFoodItems = (data) => {
  return {
    type: type.SUM_FOOD_ITEMS,
    payload: data,
  };
};

const resetStackPrice = () => {
  return {
    type: type.RESET_STACK_PRICE,
  };
};

const getVendorInfo = (data) => {
  return {
    type: type.GET_VENDOR_INFO,
    payload: data,
  };
};

const getFeaturedVendors = () => {
  return {
    type: type.GET_FEATURED_VENDORS,
  };
};

const getPreviousOrders = () => {
  return {
    type: type.GET_PREVIOUS_ORDERS,
  };
};
const itemsToCart = (payload) => {
  return {
    type: type.ADD_FOODITEMS_TO_CART,
    payload,
  };
};

const resetCart = () => {
  // return (dispatch) => {
  //   dispatch({ type: type.ADD_FOODITEMS_TO_CART, payload: [] });
  //   dispatch({ type: "UPDATE_TOTAL_PRICE", payload: 0 });
  // };
  return {
    type: type.RESET_CART,
  };
};

const calculateTotalPrice = () => {
  return (dispatch, getState) => {
    const { cartItems } = getState().cart;
    const calculatedTotal = cartItems.reduce(
      (acc, curr) => acc + parseFloat(curr.totalPrice || 0),
      0
    );
    console.log(calculatedTotal);
    dispatch({ type: "UPDATE_TOTAL_PRICE", payload: calculatedTotal });
  };
};

const addFoodItemsToCart = (data) => {
  return (dispatch, getState) => {
    const { cartItems } = getState().cart;
    data.quantity = 1;
    data.totalPrice = data.quantity * +data.unitprice;
    data.id = generateRandomID(10);
    const updatedCart = [...cartItems, data];
    toast.success("Item added successfully");
    dispatch({ type: "ADD_FOODITEMS_TO_CART", payload: updatedCart });
    dispatch(calculateTotalPrice());
  };
};

const increaseSingleCartItems = (id) => {
  return (dispatch, getState) => {
    const getCart = getState().cart.cartItems;
    const getItem = getCart.find((item) => item.id === id);
    getItem.quantity += 1;
    getItem.totalPrice = getItem.quantity * +getItem.unitprice;
    const getItemIndex = getCart.findIndex((item) => item.id === id);
    getCart.splice(getItemIndex, 1, getItem);
    dispatch({ type: "ADD_FOODITEMS_TO_CART", payload: getCart });
    console.log("vdv");
    dispatch(calculateTotalPrice());
  };
};

const decreaseSingleCartItems = (id) => {
  return (dispatch, getState) => {
    const getCart = getState().cart.cartItems;
    const getItem = getCart.find((item) => item.id === id);
    const getItemIndex = getCart.findIndex((item) => item.id === id);
    if (getItem.quantity > 1) {
      getItem.quantity -= 1;
      getItem.totalPrice = getItem.quantity * +getItem.unitprice;
      getCart.splice(getItemIndex, 1, getItem);
      dispatch({ type: type.ADD_FOODITEMS_TO_CART, payload: getCart });
      dispatch(calculateTotalPrice());
    }
  };
};

const removeFromCart = (id) => {
  return (dispatch, getState) => {
    const getCart = getState().cart.cartItems;
    const getItemIndex = getCart.findIndex((item) => item.id === id);
    getCart.splice(getItemIndex, 1);
    dispatch({ type: type.ADD_FOODITEMS_TO_CART, payload: getCart });
    toast.success("Item removed successfully");
    dispatch(calculateTotalPrice());
  };
};

const addMealPackToCart = (data) => {
  return {
    type: type.ADD_MEALPACK_TO_CART,
    payload: data,
  };
};

const showCartCount = () => {
  return {
    type: type.SHOW_CART_COUNT,
  };
};

const sendOrderToVendor = (data) => {
  return {
    type: type.SEND_ORDER_TO_VENDOR,
    payload: data,
  };
};
const reOrderFromVendor = (data) => {
  return {
    type: type.RE_ORDER_FROM_VENDOR,
    payload: data,
  };
};
const showLiveChat = (data) => {
  return {
    type: type.SHOW_LIVE_CHAT,
    payload: data,
  };
};
const viewChat = (data) => {
  return {
    type: type.VIEW_CHAT,
    payload: data,
  };
};
const getUserPreviousOrderInfo = (data) => {
  return {
    type: type.GET_USER_PREVIOUS_ORDER_INFO,
    payload: data,
  };
};

const getUserPersonalInformation = (data) => {
  return {
    type: type.GET_USER_PERSONAL_INFORMATION,
    payload: data,
  };
};

const registration = (registrationParams, navigate, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    await axios
      .post("/auth/signup", registrationParams)
      .then((res) => {
        console.log(res.data.data);
        const payload = res.data.data;

        dispatch(getUserPersonalInformation(payload));
        toast.success("Registration Successful");
        navigate("/main/vendors");
        setLoading(false);
      })
      .catch((error) => {
        //console.log(error.response.data.error.message);
        toast.error(error.response.data.error.message);
      });
  };
};

// const fetchUser = (token, navigate) => {
//   return (dispatch) => {
//     try {
//       axios
//         .get("/user/profile/me", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         })
//         .then((res) => {
//           dispatch(GetUsersSuccess(res.data.data));
//           if (res.data.data.role.toLowerCase() === "student") {
//             navigate("/dashboard");
//           } else {
//             toast.error("Please Login as a student");
//             navigate("/");
//           }
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

const LoginAction = (loginParams, navigate, setLoading) => {
  return async (dispatch) => {
    setLoading(true);
    await axios
      .post("/auth/login", loginParams)
      .then((res) => {
        console.log(res.data.data);
        const { user } = res.data.data;
        dispatch(GetUsersSuccess(user));
        const { token } = res.data.data.accessToken;
        dispatch(loginSuccess(token));
        dispatch(getUserPersonalInformation(user));
        navigate("/main/vendors");
        setLoading(false);
        toast.success("Login successful");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response.data.error.message);
        toast.error(error.response.data.error.message);
      });
  };
};

export {
  getUserPreviousOrderInfo,
  getPreviousOrders,
  reOrderFromVendor,
  getFeaturedVendors,
  showCartCount,
  sendOrderToVendor,
  resetCart,
  viewChat,
  showLiveChat,
  increaseSingleCartItems,
  decreaseSingleCartItems,
  getVendorInfo,
  addMealPackToCart,
  sumFoodItems,
  resetStackPrice,
  removeFromCart,
  addFoodItemsToCart,
  getFoodItem,
  decreaseCount,
  IncreaseCount,
  LoginAction,
  loginSuccess,
  logout,
  registration,
};
