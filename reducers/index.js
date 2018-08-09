/**
 * Created by minhhung on 7/23/18.
 */

import {persistCombineReducers} from 'redux-persist';
import auth from './AuthReducer';
import jobs from './JobsReducer';
import likedJobs from './LikesReducer';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['navigation'] // only navigation will be persisted
};


export default reducers = persistCombineReducers(persistConfig, {
    auth,
    jobs,
    likedJobs
});
