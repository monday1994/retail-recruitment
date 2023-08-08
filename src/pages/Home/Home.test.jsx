import React from 'react';
import {screen} from '@testing-library/react';
import {Home} from './Home';
import {MemoryRouter} from "react-router-dom";
import {render} from "../../tests/customRender";

describe('Home tests suite', () => {
    test('renders Home Page', () => {
        render(
            <MemoryRouter initialEntries={[`/`]}>
                <Home/>
            </MemoryRouter>
        );
        const home = screen.getByTestId('home-page-test-id');
        expect(home).toBeInTheDocument();
    })
})