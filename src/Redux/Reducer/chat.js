import * as type from "../Actions/Types";

const initialState = {
  chat: [],
};

const Chat = (state = initialState, action) => {
  switch (action.type) {
    case type.SEND_ORDER_TO_VENDOR:
      state.chat.push(action.payload);

      return {
        ...state,
        chat: state.chat,
      };

    case type.RE_ORDER_FROM_VENDOR:
     
            state.chat.push(action.payload);

      return {
        ...state,
        chat: state.chat,
      };

    case type.VIEW_CHAT:

        //state.chat.splice(0, state.chat.length)
        state.chat.push(action.payload)

      return {
        ...state,
        chat: state.chat,
      }

    default:
      return state;
  }
};

export default Chat;
