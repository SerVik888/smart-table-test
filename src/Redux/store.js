import { combineReducers, createStore, applyMiddleware } from "redux";
import trafficTableReducer from "./trafficTableReducer";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
    trafficTable: trafficTableReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store