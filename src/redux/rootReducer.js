import authReducer from './features/auth';
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    auth: authReducer
});