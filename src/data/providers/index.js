import * as lydiaAPI from '../clients/';

export async function loadTransactions () {
    try {
        const response = await lydiaAPI.loadTransactions();
        return response;
    } catch (error) {
        throw new Error('Failed to load Transactions data!');
    }
}
export async function loadUsers () {
    try {
        const response = await lydiaAPI.loadUsers();
        return response;
    } catch (error) {
        throw new Error('Failed to load Users data!');
    }
}