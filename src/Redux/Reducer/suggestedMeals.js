import * as type from "../Actions/Types";


const initialState = {
  numberOfItems: 0,
  suggestedMeal: null,
  itemPrice:0,
  totalPrice: 0,

};

const SuggestedMeal = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_FOOD_ITEMS:

    return {
      ...state,
      suggestedMeal: action.payload.suggestedMeal,
    }
    
    default:
      return state;
  }
};

export default SuggestedMeal;
