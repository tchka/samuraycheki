import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import articleReducer from "./articleReducer";
import userReducer from "./userReducer";


let reducers = combineReducers({
    articles: articleReducer,
    auth: userReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;