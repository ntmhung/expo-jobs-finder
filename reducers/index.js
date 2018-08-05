/**
 * Created by minhhung on 7/23/18.
 */

import {combineReducers} from 'redux';
import auth from './AuthReducer';
import jobs from './JobsReducer';
import likedJobs from './LikesReducer';

export default combineReducers({
    auth,
    jobs,
    likedJobs
})
