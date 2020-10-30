import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as call from './list/reducer';

let store = createStore(
    combineReducers({
        ...call,
    }),
    applyMiddleware(thunk)
)

export default store;