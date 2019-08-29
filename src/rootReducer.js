import { combineReducers } from 'redux';
import postReducer from './reducers/users'

export default combineReducers({
    users:postReducer
})