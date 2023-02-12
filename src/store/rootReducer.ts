import { combineReducers } from "redux";
import repositories from "./reducers/repositories/repositories";

export const rootReducer = combineReducers({
  repositories,
});
