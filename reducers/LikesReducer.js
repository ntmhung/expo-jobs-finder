/**
 * Created by minhhung on 8/5/18.
 */
import {LIKE_JOB} from "../actions/type";
import _ from 'lodash';

export default function(state = [], action) {
    switch(action.type){
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ...state
            ],'id');
        default:
            return state;
    }
}