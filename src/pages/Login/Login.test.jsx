import React from 'react';
import {screen} from '@testing-library/react';
import {Login} from './Login';
import {render} from "../../tests/customRender";
import {MemoryRouter} from "react-router-dom";

describe('Login tests suite', () => {
    test('renders Login Page', () => {
        render(
            <MemoryRouter initialEntries={[`/login`]}>
                <Login/>
            </MemoryRouter>
        );
        const login = screen.getByTestId('login-page-test-id');
        expect(login).toBeInTheDocument();
    })
})