import {FETCH_TIMEOUT} from "../config/constants";
import {products} from "../tests/testData/products";

export const fetchProductsCall = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, FETCH_TIMEOUT);
    });
}