import thunkMiddleware from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";


let reducers = combineReducers({

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;