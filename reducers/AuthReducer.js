/**
 * Created by minhhung on 7/26/18.
 */

import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from "../actions/type";

const INITIAL_STATE = {
    token: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return {...state, token: action.payload};
        case FACEBOOK_LOGIN_FAIL:
            return {...state, token: null};
        default:
            return state;
    }
}
