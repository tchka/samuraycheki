import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import articleReducer from "./articleReducer";


let reducers = combineReducers({
    articles: articleReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;