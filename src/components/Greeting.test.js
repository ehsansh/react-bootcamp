import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello world as a text', () => {
    //arrange
    render(<Greeting />);

    //act

    //assert
    const helloWorldElm = screen.getByText('hello world', { exact: false });
    expect(helloWorldElm).toBeInTheDocument();
});
