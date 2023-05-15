import * as type from "../Actions/Types";

const initialState = {
  liveChat: [],
};

const LiveChat = (state = initialState, action) => {
  switch (action.type) {
    case type.SHOW_LIVE_CHAT:
      //state.liveChat.push(action.payload);

     


      
      return {
        ...state,
        liveChat: action.payload,
      };

    default:
      return state;
  }
};

export default LiveChat;
