/**
 * Created by minhhung on 7/23/18.
 */
import {createStore, compose, applyMiddleware} from "redux";
import {persistStore} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import thunk from "redux-thunk";
import reducers from '../reducers';


const store = createStore(
    reducers,
    {},
    compose(
        applyMiddleware(thunk)
    )
);
const persistor = persistStore(store);

export default { store, persistor };
