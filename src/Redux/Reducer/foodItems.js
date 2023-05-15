import * as type from "../Actions/Types";


const initialState = {
  
  mainMeals: null,
  sideMeals: null,
  totalPrice: 0,
};

const FoodItems = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_FOOD_ITEMS:
      return {
        ...state,
        mainMeals: action.payload.mainMeal,
        sideMeals: action.payload.sideMeal,
        totalPrice: 0
      };

    case type.GET_ITEMS_COUNT_INCREMENT:
      let increaseMainMeal = [...state.mainMeals].map((item, index) => {
        if (index === action.payload.id && action.payload.bool === true) {
          let inc = item.quantity + 1;
          let price = item.unitprice * inc;

        

          return { ...item, price: price, quantity: inc };
        }
        return item;
      });

      let increaseSideMeal = [...state.sideMeals].map((item, index) => {
        if (index === action.payload.id && action.payload.bool === false) {
          let inc = item.quantity + 1;
          let price = item.unitprice * inc;

          
         

          return { ...item, price: price, quantity: inc };
        }
        return item;
      });

      return {
        ...state,
        mainMeals: increaseMainMeal,
        sideMeals: increaseSideMeal,
      };

    case type.GET_ITEMS_COUNT_DECREMENT:
      let decreaseMainMeal = [...state.mainMeals].map((item, index) => {
        if (index === action.payload.id && action.payload.bool === true) {
          let dec = item.quantity > 1 ? item.quantity - 1 : (item.quantity = 1);
          let price = item.unitprice * dec;
          
         

          return { ...item, price: price, quantity: dec };
        }
        return item;
      });

      let decreaseSideMeal = [...state.sideMeals].map((item, index) => {
        if (index === action.payload.id && action.payload.bool === false) {
          let dec = item.quantity > 1 ? item.quantity - 1 : (item.quantity = 1);
          let price = item.unitprice * dec;

         
         

          return { ...item, price: price, quantity: dec };
        }
        return item;
      });

      return {
        ...state,
        mainMeals: decreaseMainMeal,
        sideMeals: decreaseSideMeal,
      };
    case type.SUM_FOOD_ITEMS:
      return {
        ...state,
        totalPrice: state.totalPrice + parseFloat(action.payload),
      };

    case type.RESET_STACK_PRICE:

    return  {
      ...state,
      totalPrice:0
    }
    default:
      return state;
  }
};

export default FoodItems;
