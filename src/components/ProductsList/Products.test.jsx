const testProducts = [
    {
        "title": "Sleek Wooden Chair",
        "purchaseAmount": 319,
        "id": "a0789f88-a544-430a-aa03-a8e309121fa5"
    },
    {
        "title": "Handcrafted Concrete Cheese",
        "purchaseAmount": 278,
        "id": "87c26b80-bf21-4f4c-9d01-f558794d6f28"
    },
]

jest.mock('../../api/productsCalls', () => ({
    fetchProductsCall: jest.fn().mockResolvedValue(testProducts),
}));

import React from 'react';
import {ProductsList} from './ProductsList';
import {act, waitFor, screen} from '@testing-library/react';
import {render} from "../../tests/customRender";

describe('ProductsList tests suite', () => {

    test('Empty ProductsList should properly display', async () => {
        await act(async () => {
            render(<ProductsList />
                , {});
        });

        await waitFor(() => {
            const noProductsLabel = screen.getByText('No products available');
            expect(noProductsLabel).toBeInTheDocument();
        });
    });

})