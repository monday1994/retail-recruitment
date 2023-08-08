import React from 'react';
import {ProductsListItem} from './ProductsListItem';
import {screen} from '@testing-library/react';
import {render} from "../../../tests/customRender";

const testProduct = {
    "title": "Sleek Wooden Chair",
    "purchaseAmount": 319,
    "id": "a0789f88-a544-430a-aa03-a8e309121fa5"
}

describe('ProductsListItem tests suite', () => {

    test('ProductsListItem should properly display', () => {
        render(<ProductsListItem
                product={testProduct}
                handleBuyClick={jest.fn()}
            />
            , {});

        const productName = screen.getByText(testProduct.title);
        expect(productName).toBeInTheDocument();
        const productPrice = screen.getByText(testProduct.purchaseAmount + '$');
        expect(productPrice).toBeInTheDocument();
    });

})