/**
 * Created by minhhung on 7/28/18.
 */
import {FETCH_JOBS} from "../actions/type";

const INITIAL_STATE = {
    results: []
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_JOBS:
            return action.payload;
        default:
            return state;
    }
}