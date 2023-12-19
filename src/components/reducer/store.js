import handleCart from "./handleCart";
import {combineReducers} from "redux";
//import rootReducers from "./index";
import {createStore} from 'redux';

const rootReducers = combineReducers({
    handleCart, 
})

const store = createStore(rootReducers);

export default store;   

