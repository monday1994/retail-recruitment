import React from 'react';
import {screen} from '@testing-library/react';
import {Transactions} from './Transactions';
import {MemoryRouter} from "react-router-dom";
import {render} from "../../tests/customRender";

describe('Transactions tests suite', () => {
    test('renders Transactions Page', () => {
        render(
            <MemoryRouter initialEntries={[`/transactions`]}>
                <Transactions />
            </MemoryRouter>, { preloadedState: { auth: { user: { id: 1 }}}}
        );
        const transactions = screen.getByTestId('transactions-page-test-id');
        expect(transactions).toBeInTheDocument();
    })
})