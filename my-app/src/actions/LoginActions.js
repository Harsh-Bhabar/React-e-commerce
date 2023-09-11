import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

export const userLoginSuccess = (userData) => {
	return {
		type: LOGIN_SUCCESS,
		payload: userData
	}
}

export const userLoginFailure = (userData) => {
	return {
		type: LOGIN_FAILURE,
		payload: userData
	}
}
