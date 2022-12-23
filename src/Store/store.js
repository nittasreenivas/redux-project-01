import { createStore } from "redux";
import reducer from "./reducers/reducer";

const store = new createStore(reducer);

export default store;
