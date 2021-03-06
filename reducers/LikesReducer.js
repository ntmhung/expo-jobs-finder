/**
 * Created by minhhung on 8/5/18.
 */
import {LIKE_JOB, CLEAR_LIKED_JOBS} from "../actions/type";
import {REHYDRATE} from 'redux-persist';
import _ from 'lodash';

export default function(state = [], action) {
    switch(action.type){
        case REHYDRATE:
            return action.payload.likedJobs || [];
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ],'id');
        case CLEAR_LIKED_JOBS:
            return [];
        default:
            return state;
    }
}