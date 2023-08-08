import React from 'react';
import {screen, render} from '@testing-library/react';
import {TextField} from './TextField';

describe('Text field tests suite', () => {
    test('renders a text field', () => {
        render(<TextField
            data-testid={'mock-test-id'}
            id={'mock-id'}
            name={'mockName'}
            value={''}
            onChange={jest.fn()}
            type={'text'}
        />);
        const textField = screen.getByTestId('mock-test-id');
        expect(textField).toBeInTheDocument();
    })
})