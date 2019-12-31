import * as lydiaProvider from '../data/providers/';
import * as types from '../constants/types.js';

export function loadTransactions () {
    return async (dispatch) => {
        dispatch({
            type: types.LYDIA_LOADING_TRANSACTIONS_STATE,
            payload: true
        });
        const newData = await lydiaProvider.loadTransactions();
        dispatch({
            type: types.LYDIA_LOAD_TRANSACTIONS,
            payload: newData
        });
        dispatch({
            type: types.LYDIA_LOADING_TRANSACTIONS_STATE,
            payload: false
        });
    };
}
export function loadUsers () {
    return async (dispatch) => {
        dispatch({
            type: types.LYDIA_LOADING_USERS_STATE,
            payload: true
        });
        const newData = await lydiaProvider.loadUsers();
        dispatch({
            type: types.LYDIA_LOAD_USERS,
            payload: newData
        });
        dispatch({
            type: types.LYDIA_LOADING_USERS_STATE,
            payload: false
        });
    };
}
