import { combineReducers } from 'redux';
import loginReducer from './LoginReducer'; 
import registerReducer from './RegisterReducer'; 

const rootReducer = combineReducers({
	user: loginReducer, // must give names here as it is used in mapStateToProps
	users: registerReducer
});

export default rootReducer;
