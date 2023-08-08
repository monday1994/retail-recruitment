import { v4 as uuidv4 } from 'uuid';
import {isNotEmptyObject} from "./utils";
import {calculatePromoPoints} from "./promoPoints/promoPointsUtils";

export const createNewTransaction = (product, userId) => {
    if(isNotEmptyObject(product) && userId) {
        const { title, purchaseAmount } = product;

        const promoPoints = calculatePromoPoints(Number(purchaseAmount));

        return {
            id: uuidv4(),
            title,
            purchaseAmount,
            userId,
            date: new Date(),
            promoPoints
        }
    }
}