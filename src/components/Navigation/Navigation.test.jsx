import React from 'react';
import {Navigation} from './Navigation';
import {MemoryRouter} from 'react-router-dom';
import {screen} from '@testing-library/react';
import {render} from "../../tests/customRender";
import {users} from "../../tests/testData/users";

const loggedInPreloadedState = {
    auth: {
        user: users[0]
    }
}

describe('Navigation tests suite', () => {

    test('Navigation should properly display for not logged in user', async () => {
        render(
            <MemoryRouter initialEntries={[`/`]}>
                <Navigation />
            </MemoryRouter>
            , {});

        const logo = screen.getByTestId('logo-test-id');
        const products = screen.getByText('Products');
        const login = screen.getByText('Login');

        expect(logo).toBeInTheDocument();
        expect(products).toBeInTheDocument();
        expect(login).toBeInTheDocument();
    });

    test('Navigation should properly display for logged in user', async () => {
        render(
            <MemoryRouter initialEntries={[`/`]}>
                <Navigation />
            </MemoryRouter>
            , { preloadedState: loggedInPreloadedState });

        const logo = screen.getByTestId('logo-test-id');
        const products = screen.getByText('Products');
        const logout = screen.getByText('Log Out');
        const userName = screen.getByText(loggedInPreloadedState.auth.user.name);

        expect(logo).toBeInTheDocument();
        expect(products).toBeInTheDocument();
        expect(logout).toBeInTheDocument();
        expect(userName).toBeInTheDocument();
    });
})