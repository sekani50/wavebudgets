// import * as type from "../Actions/Types";

const initailState = {
  cartItems: [],
  overallPrice: 0,
};
const Cart = (state = initailState, action) => {
  switch (action.type) {
    case "ADD_FOODITEMS_TO_CART":
      return {
        ...state,
        cartItems: action.payload,
      };

    case "UPDATE_TOTAL_PRICE":
      return {
        ...state,
        overallPrice: action.payload,
      };

    default:
      return state;
  }
};

export default Cart;
