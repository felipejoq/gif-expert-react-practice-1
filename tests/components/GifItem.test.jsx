import {render, screen} from "@testing-library/react";
import {GifItem} from "../../src/components/index.js";

describe('Pruebas en <GifItem />', () => {

    const title = 'Arnold'
    const url = 'https://domain.test/image.jpg';

    test('debe hacer match con el snapshot.', () => {
        const {container} = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y alt indicado.', () => {
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Debe mostrar el título en el componente.', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
    })
});