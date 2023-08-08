import {calculatePromoPoints} from "./promoPointsUtils";

describe('Promo Points Utils tests suite', () => {
    test('Should properly calculate points for 50$', () => {
        const purchaseAmount = 50;
        const calculatedPoints = calculatePromoPoints(purchaseAmount);
        expect(calculatedPoints).toEqual(0);
    });

    test('Should properly calculate points for 75$', () => {
        const purchaseAmount = 75;
        const calculatedPoints = calculatePromoPoints(purchaseAmount);
        expect(calculatedPoints).toEqual(25);
    });

    test('Should properly calculate points for 120$', () => {
        const purchaseAmount = 120;
        const calculatedPoints = calculatePromoPoints(purchaseAmount);
        expect(calculatedPoints).toEqual(90);
    });

    test('Should return 0 for string value', () => {
        const purchaseAmount = '500';
        const calculatedPoints = calculatePromoPoints(purchaseAmount);
        expect(calculatedPoints).toEqual(0);
    });

    test('Should return 0 for object value', () => {
        const purchaseAmount = {};
        const calculatedPoints = calculatePromoPoints(purchaseAmount);
        expect(calculatedPoints).toEqual(0);
    });

    test('Should return 0 for array value', () => {
        const purchaseAmount = [];
        const calculatedPoints = calculatePromoPoints(purchaseAmount);
        expect(calculatedPoints).toEqual(0);
    });

    test('Should return 0 for negative value', () => {
        const purchaseAmount = -3;
        const calculatedPoints = calculatePromoPoints(purchaseAmount);
        expect(calculatedPoints).toEqual(0);
    });
})