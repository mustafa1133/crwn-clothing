import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer'

const persistConfig = {
    key: 'root', // start from root
    storage, //
    whitelist: ['cart'] //array containing the string names of any reducers that we want to store
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
});

export default persistReducer(persistConfig,rootReducer)
// sets all reducers of different types to one giant object 