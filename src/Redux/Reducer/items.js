import * as type from "../Actions/Types";
const initailState = {
    items: null,
    category:null
   
  };
  const Items = (state = initailState, action) => {
    switch (action.type) {
      case type.GET_ITEMS:
        return {
          ...state,
          items: action.payload,
        };
        case type.GET_CATEGORY:
        return {
          ...state,
          category: action.payload,
        };
  
  
      default:
        return state;
    }
  };
  
  export default Items;
  