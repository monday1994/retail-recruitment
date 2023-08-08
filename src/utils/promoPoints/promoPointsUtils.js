import {isNumber} from "../utils";

const getValueBetween50And100 = (value) => {
    if (value <= 50) {
        return 0;
    } else if (value > 100) {
        return 50;
    } else {
        return value - 50;
    }
};

const BASE_POINTS = 1;
const BONUS_POINTS = 2;

export const calculatePromoPoints = (purchaseAmount) => {
    if(isNumber(purchaseAmount)) {
        if (purchaseAmount > 100) {
            const amountOver100 = purchaseAmount - 100;
            const amountBetween50And100 = getValueBetween50And100(purchaseAmount);

            return (amountOver100 * BONUS_POINTS) + (amountBetween50And100 * BASE_POINTS);
        }

        if (purchaseAmount > 50) {
            return (purchaseAmount - 50) * BASE_POINTS;
        }
    }

    return 0;
}