import {legacy_createStore as createStore} from "redux"
import { runReducer } from "./gymData/reduce"
// import { profileReducer } from "./profileData/reducer"



export const reduxStore=createStore(runReducer)