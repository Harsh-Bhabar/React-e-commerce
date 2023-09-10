import {createStore} from 'react-redux'
import rootReducer from './reducers'

const initialState = {};

export const store = createStore(rootReducer,
	initialState)