import React from 'react';
import {TransactionsListItem} from './TransactionsListItem';
import {screen} from '@testing-library/react';
import {render} from "../../../tests/customRender";
import {formatDate} from "../../../utils/utils";

const testTransaction = {
    "title": "Refined Granite Car",
    "purchaseAmount": 469,
    "id": "a6915cb8-8a0a-4b86-889a-6b7509f0bca2",
    "userId": "959e6abf-ae32-4646-a0dc-673f224d4299",
    "date": "2023-06-04T00:56:40.466Z",
    "promoPoints": 788
};

describe('TransactionsListItem tests suite', () => {

    test('TransactionsListItem should properly display', () => {
        const { title, promoPoints, purchaseAmount, date } = testTransaction;
        render(<TransactionsListItem
                title={title}
                purchaseAmount={purchaseAmount}
                promoPoints={promoPoints}
                date={date}
            />
            , {});

        const productName = screen.getByText(title);
        expect(productName).toBeInTheDocument();
        const productPrice = screen.getByText(purchaseAmount + '$');
        expect(productPrice).toBeInTheDocument();
        const promoPointsLabel = screen.getByText(promoPoints + ' earned points');
        expect(promoPointsLabel).toBeInTheDocument();
        const dateLabel = screen.getByText(formatDate(date));
        expect(dateLabel).toBeInTheDocument();
    });
})

