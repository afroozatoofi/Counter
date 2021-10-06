import { combineReducers } from "redux";
import { counterReducer } from "./counter";

export const reducers = combineReducers({
  counter: counterReducer,
});
