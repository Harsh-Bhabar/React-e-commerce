import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from '../actions/actionTypes'

const initialState = {
	isLoggedIn: false,
	user: null,
	error: null
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				user: action.payload,
				error: null
			};

		case LOGIN_FAILURE:
			return {
				...state,
				isLoggedIn: false,
				user: null,
				error: action.payload
			};

		case LOGOUT:
			return {
				...state,
				isLoggedIn: false,
				user: null,
				error: null
			};

		default:
			return state;
	}
}

export default loginReducer;