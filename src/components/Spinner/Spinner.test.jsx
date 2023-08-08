import React from 'react';
import {screen, render} from '@testing-library/react';
import {CircleSpinner} from './Spinner';

describe('Spinners tests suite', () => {
    test('Circle spinner should properly render', () => {
        render(<CircleSpinner />);
        const spinner = screen.getByTestId('spinner-test-id');
        expect(spinner).toBeInTheDocument();
    })
})