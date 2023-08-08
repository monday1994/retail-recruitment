import React from 'react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event'
import {MemoryRouter} from 'react-router-dom';
import {screen, act} from '@testing-library/react';
import {render} from "../../../tests/customRender";

describe('LoginForm tests suite', () => {

    test('LoginForm should properly display', async () => {
        render(
          <MemoryRouter initialEntries={[`/login`]}>
              <LoginForm
              />
          </MemoryRouter>
            , {});

        // inputs
        const emailInput = screen.getByTestId('email-input-test-id');
        const passwordInput = screen.getByTestId('password-input-test-id');

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();

        await act(async () => {
            userEvent.type(emailInput, 'testemail@gmail.com');
            userEvent.type(passwordInput, 'password');

            expect(emailInput).toHaveValue('testemail@gmail.com');
            expect(passwordInput).toHaveValue('password');

            const loginButton = screen.getByText('Log in');
            expect(loginButton).toBeInTheDocument();
        });
    });
})