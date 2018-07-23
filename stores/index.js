/**
 * Created by minhhung on 7/23/18.
 */
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from '../reducers';

const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk)
    )
);

export default store;
