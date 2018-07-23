/**
 * Created by minhhung on 7/23/18.
 */
import {AsyncStorage} from 'react-native';
import {
    FACEBOOK_LOGIN_SUCCESS
} from './type';

/**
 * AsyncStorage is used to access mobile storage
 * It is similar to localStorage on browser
 */
export const facebookLogin = () => async dispatch => {
        let fb_token = await AsyncStorage.getItem('fb_token');
        if(fb_token){

        } else {

        }
    };