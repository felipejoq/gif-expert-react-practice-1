import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../../src/components/index.js";

describe('Pruebas en <AddCategory />', () => {
    const inputValue = 'Dragon ball';

    test('Debe cambiar el valor del input text', () => {
        render(<AddCategory onNewCategory={() => {
        }}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toEqual('Dragon ball');
        // screen.debug();
    });

    test('Debe llamar a onNewCategory siempre y cuando Input tenga un valor.', () => {
        // Simulando la función con un "mock".
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        // screen.debug();
    });

    test('No debe llamar el onNewCategory si está vacío el input', () => {
        // Simulando la función con un "mock".
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();
        // expect(onNewCategory).toHaveBeenCalledTimes(0);
        // screen.debug();
    });

});