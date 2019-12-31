import * as lydiaType from '../constants/types.js';

const rootReducer = ( state = {}, action) => {
    switch (action.type) {
        case lydiaType.LYDIA_LOADING_TRANSACTIONS_STATE: {
            return {
                ...state,
                isLoadingTransactions: action.payload
            };
        }
        case lydiaType.LYDIA_LOADING_USERS_STATE: {
            return {
                ...state,
                isLoadingUsers: action.payload
            };
        }
        case lydiaType.LYDIA_LOAD_TRANSACTIONS: {
            return {
                ...state,
                transactions: action.payload.data
            };
        }
        case lydiaType.LYDIA_LOAD_USERS: {
            return {
                ...state,
                users: action.payload.data
            };
        }
        default:
            return state;
    }
};

export default rootReducer;
