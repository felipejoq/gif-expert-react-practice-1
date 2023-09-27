import {render, screen} from '@testing-library/react';
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
jest.mock("../../src/hooks/useFetchGifs.js");

describe('Pruebas en <GifGrid />', () => {

    const inputValue = 'Dragon ball';

    test('Debe mostrar el loading de forma inicial.', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={inputValue}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(inputValue));
        // screen.debug();
    });

    test('Debe mostrar items cuando se cargan las imágenes desde el hook useFetchGifs', () => {

        const gifs = [{
            id: 'uno',
            title: 'Dragon ball',
            url: 'https://domain.test/image.jpg'
        },{
            id: 'dos',
            title: 'Hey Arnold',
            url: 'https://domain.test/image2.jpg'
        }]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={inputValue}/>);

        expect(screen.getAllByRole('img').length).toBe(2)

        // screen.debug();

    });
});