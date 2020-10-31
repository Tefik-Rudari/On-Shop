import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const middlleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlleware)))

export default store
