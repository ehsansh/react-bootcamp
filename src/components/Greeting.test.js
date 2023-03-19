import { render, screen } from '@testing-library/react';
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
});
