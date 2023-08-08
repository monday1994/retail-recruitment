import {FETCH_TIMEOUT} from "../config/constants";
import {transactions} from "../tests/testData/transactions";

export const fetchUserTransactionsCall = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userTransactions = transactions?.filter(({userId}) => userId === id);
            resolve(userTransactions);
        }, FETCH_TIMEOUT);
    });
}

export const addNewTransaction = (newTransaction) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            transactions.push(newTransaction);
            resolve(newTransaction);
        }, FETCH_TIMEOUT);
    });
}