import * as type from "../Actions/Types";
import { previousOrders} from "Redux/mock";


const initialState = {
  numberOfItems: 0,
  previousOrders: previousOrders,
  customerOrderInformation:"",
  itemPrice:0,
  totalPrice: 0,

};

const PreviousOrders = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PREVIOUS_ORDERS:

    return {
      ...state,
      previousOrders: state.previousOrders,
    }

    case type.GET_USER_PREVIOUS_ORDER_INFO:
            state.customerOrderInformation = action.payload

      return {
        ...state,
        customerOrderInformation: state.customerOrderInformation
      }
    
    default:
      return state;
  }
};

export default PreviousOrders;