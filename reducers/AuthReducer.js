/**
 * Created by minhhung on 7/26/18.
 */

import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from "../actions/type";

// const INITIAL_STATE = {};

export default (state = {}, action) => {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return {token: action.payload};
        case FACEBOOK_LOGIN_FAIL:
            return {token: null};
        default:
            return state;
    }
}
