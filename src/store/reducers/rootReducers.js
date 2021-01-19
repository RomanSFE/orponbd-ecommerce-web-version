import {combineReducers} from 'redux';
import AuthReducers from "./AuthReducers";

const rootReducers = combineReducers({
    auth: AuthReducers
});

export default rootReducers;