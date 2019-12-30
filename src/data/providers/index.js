import * as lydiaAPI from '../clients/';

export async function loadTransactions (experimentId) {
    try {
        const response = await lydiaAPI.loadTransactions(experimentId);
        return response;
    } catch (error) {
        throw new Error('Failed to load Transactions data!');
    }
}