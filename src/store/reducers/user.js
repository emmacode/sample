import * as actionTypes from "../actions/types";

const initialState = {
  user_text: ""
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_INPUT:
      return {
        ...state,
        user_text: action.payload
      };
    default:
      return state;
  }
};
export default user;
