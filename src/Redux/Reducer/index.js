import { combineReducers } from "redux";
import User from "./user";
import Cart from "./cart";
import FoodItems from "./foodItems";
import SuggestedMeal from "./suggestedMeals"
import Chat from "./chat"
import FeaturedVendors from "./featuredVendor"
import PreviousOrders from "./previousOrders"
import LiveChat from "./livechat";
const appReducer = combineReducers({
  user: User,
  cart:Cart,
  foodItems:FoodItems,
  suggestedMeal:SuggestedMeal,
  chat:Chat,
  featuredVendors:FeaturedVendors,
  previousOrders:PreviousOrders,
  livechat: LiveChat,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // storage.removeItem('persist:otherKey')
    localStorage.removeItem("persist:root");

    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
