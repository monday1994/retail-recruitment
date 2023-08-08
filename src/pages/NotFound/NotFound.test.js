import { render, screen } from '@testing-library/react';
import {NotFound} from "./NotFound";

describe('NotFound Page tests suite', () => {
    test('Should properly render NotFound page', () => {
        render(<NotFound />);
        const notFoundText = screen.getByText('Page does not exist');
        expect(notFoundText).toBeInTheDocument();
    });
})
