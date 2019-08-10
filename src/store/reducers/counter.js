import * as actionTypes from "../actions/types";

const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

export default counter;
