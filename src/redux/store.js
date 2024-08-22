import {applyMiddleware, legacy_createStore as createStore} from "redux"
import { singleReducer } from "./multiReducers"
import {thunk} from 'redux-thunk'

export const reduxStore=createStore(singleReducer,applyMiddleware(thunk))