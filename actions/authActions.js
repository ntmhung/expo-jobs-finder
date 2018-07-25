/**
 * Created by minhhung on 7/23/18.
 */
import {AsyncStorage} from "react-native";
import {Facebook} from "expo";
import {FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL} from "./type";

/**
 * AsyncStorage is used to access mobile storage
 * It is similar to localStorage on browser
 *
 * This facebookLogin function return a function, therefore we in the arrow function, we immediately return aync
 * function with "dispatch" parameter
 */
export const facebookLogin = () => async dispatch => {
    let fb_token = await AsyncStorage.getItem('fb_token');

    if (fb_token) {
        dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: fb_token})
    } else {
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    let {type, token} = await Facebook.logInWithReadPermissionsAsync('273826823374762', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({
            type: FACEBOOK_LOGIN_FAIL
        })
    }

    await AsyncStorage.setItem('fb_token', token);

    dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token})
};