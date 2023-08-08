import React from 'react';
import {screen, render} from '@testing-library/react';
import {Button} from './Button';

describe('Button tests suite', () => {
    test('renders a button', () => {
        render(<Button>button</Button>);
        const button = screen.getByText('button');
        expect(button).toBeInTheDocument();
    })
})