import { combineReducers } from "redux";
import { profileReducer } from "./profileData/reducer";
import { runReducer } from "./gymData/reduce";
import { productsReducer } from "./products/reducer";

export const singleReducer=combineReducers({
    profile:profileReducer,
    gym:runReducer,
    productData:productsReducer
})