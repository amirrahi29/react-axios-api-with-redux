import { combineReducers, createStore } from "redux";
import { productReducers } from "./productReducer";

const routeReducers = combineReducers({
    productReducers
});

export const store = createStore(routeReducers);