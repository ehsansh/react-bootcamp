import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('greeting component', () => {
    test('renders hello world as a text', () => {
        //arrange
        render(<Greeting />);

        //act

        //assert
        const helloWorldElm = screen.getByText('hello world', { exact: false });
        expect(helloWorldElm).toBeInTheDocument();
    });

    test('renders good to see you if the button is NOT clicked', () => {
        render(<Greeting />);

        const goodToSeeElm = screen.getByText('good to see you.', {
            exact: false,
        });
        expect(goodToSeeElm).toBeInTheDocument();
    });

    test('renders changed if the button is clicked', () => {
        render(<Greeting />);

        const buttonElm = screen.getByRole('button');
        userEvent.click(buttonElm);

        const changedTexElm = screen.getByText('changed.', {
            exact: false,
        });
        expect(changedTexElm).toBeInTheDocument();
    });

    test('renders not showing good to see you if the button is clicked', () => {
        render(<Greeting />);

        const buttonElm = screen.getByRole('button');
        userEvent.click(buttonElm);

        const outputElm = screen.queryByText('good to see you', {
            exact: false,
        });
        expect(outputElm).toBeNull();
    });
});
