import * as type from "../Actions/Types";
import { mock } from "mock";
const initailState = {
    items: mock,
   
  };
  const Items = (state = initailState, action) => {
    switch (action.type) {
      case type.GET_ITEMS:
        return {
          ...state,
          items: action.payload,
        };
  
  
      default:
        return state;
    }
  };
  
  export default Items;
  