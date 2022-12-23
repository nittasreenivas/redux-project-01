import { combineReducers } from "redux";
import counterReducer from "./counter.reducer";
import countriesReducer from "./countries.reducer";

const reducer = combineReducers({
  counter: counterReducer,
  product: countriesReducer
});

export default reducer;
