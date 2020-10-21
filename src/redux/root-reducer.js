import {combineReducers} from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
})
// sets all reducers of different types to one giant object 