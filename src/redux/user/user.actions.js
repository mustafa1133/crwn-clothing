import {UserActionTypes} from './user.types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER, // string of action
    payload: user
});