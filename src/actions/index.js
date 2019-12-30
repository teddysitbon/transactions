import * as lydiaProvider from '../data/providers/';
import * as types from '../constants/types.js';

export function loadTransactions () {
    return async (dispatch) => {
        const newData = await lydiaProvider.loadTransactions();
        dispatch({
            type: types.LYDIA_LOAD_TRANSACTIONS,
            payload: newData
        });
        dispatch({
            type: types.LYDIA_LOADING_STATE,
            payload: true
        });
    };
}
