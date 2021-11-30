import { combineReducers } from "redux";
import userReducer from "./User/userReducer";

export const createRootReducer = () => combineReducers({
    user: userReducer,
});