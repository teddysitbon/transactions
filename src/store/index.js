import { applyMiddleware, createStore } from 'redux';
import { initialState } from '../constants/schemas.js';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;
