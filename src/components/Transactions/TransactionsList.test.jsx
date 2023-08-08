import {users} from "../../tests/testData/users";

const testTransactions = [
    {
        "title": "Elegant Plastic Table",
        "purchaseAmount": 113,
        "id": "870ca5e5-21f3-4b54-85cc-e4ed079acdc7",
        "userId": "959e6abf-ae32-4646-a0dc-673f224d4299",
        "date": "2023-05-10T06:07:12.477Z",
        "promoPoints": 76
    },
    {
        "title": "Refined Granite Car",
        "purchaseAmount": 469,
        "id": "a6915cb8-8a0a-4b86-889a-6b7509f0bca2",
        "userId": "959e6abf-ae32-4646-a0dc-673f224d4299",
        "date": "2023-06-04T00:56:40.466Z",
        "promoPoints": 788
    },
]

jest.mock('../../api/transactionsCalls', () => ({
    fetchUserTransactionsCall: jest.fn()
}));

fetchUserTransactionsCall.mockResolvedValue(testTransactions);

const testUser = users[0];

import React from 'react';
import {TransactionsList} from './TransactionsList';
import {act, waitFor, screen} from '@testing-library/react';
import {render} from "../../tests/customRender";
import {MemoryRouter} from "react-router-dom";
import {fetchUserTransactionsCall} from "../../api/transactionsCalls";

describe('TransactionsList tests suite', () => {

    test('Empty TransactionsList should properly display', async () => {
        await act(async () => {
            render(
                <MemoryRouter initialEntries={[`/transactions`]}>
                    <TransactionsList />
                </MemoryRouter>
                , { preloadedState: {
                auth: { user: testUser }
            }});
        });

        await waitFor(() => {
            const noTransactionsLabel = screen.getByText('No transactions to show');
            expect(noTransactionsLabel).toBeInTheDocument();
        });
    });

})