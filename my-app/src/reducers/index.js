import {combineReducers } from 'redux' 
import { loginReducer } from './LoginReducer';
import { registerReducer } from './RegisterReducer';

export const rootReducer = combineReducers({
	loginReducer,
	registerReducer
});