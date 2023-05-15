import * as type from "../Actions/Types";
import { featuredVendors} from "Redux/mock";

const initialState = {
  
 featuredVendors: featuredVendors,
 vendor:null,
  

};

const FeaturedVendors = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_FEATURED_VENDORS:

    return {
      ...state,
      featuredVendors: state.featuredVendors,
    }

    case type.GET_VENDOR_INFO:

    return {
      ...state,
      vendor: action.payload,
     
    }
    
    default:
      return state;
  }
};

export default FeaturedVendors;