import * as lydiaType from '../constants/types.js';

const rootReducer = ( state = {}, action) => {
    switch (action.type) {
        case lydiaType.LYDIA_LOADING_STATE: {
            return {
                ...state,
                isLoadingTransactions: false
            };
        }
        case lydiaType.LYDIA_LOAD_TRANSACTIONS: {
            return {
                ...state,
                transactions: action.payload.data
            };
        }
        default:
            return state;
    }
};

export default rootReducer;
