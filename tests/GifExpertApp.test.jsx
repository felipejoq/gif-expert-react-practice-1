import {fireEvent, render, screen} from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp.jsx";

describe('Pruebas en <GifExpertApp />', () => {

    const inputValue = 'Hey Arnold';

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
    })

    test('Debe crear un nuevo resultado al enviar el formulario.', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
        expect(input.value).toBe('');
        // screen.debug();
    });


});