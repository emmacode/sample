import { combineReducers } from "redux";

import buttonReducer from "./button";
import userReducer from "./user";
import counterReducer from "./counter";

const rootReducer = combineReducers({
  button: buttonReducer,
  user: userReducer,
  counter: counterReducer
});
export default rootReducer;
