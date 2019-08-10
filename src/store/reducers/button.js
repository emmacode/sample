import * as actionTypes from "../actions/types";

const initialState = {
  stateprop: false
};

const button = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SUCCESS:
      return {
        ...state,
        stateprop: true
      };
    case actionTypes.FAILURE:
      return {
        ...state,
        stateprop: false
      };
    default:
      return state;
  }
};
export default button;
