import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";
import {renderHook, waitFor} from "@testing-library/react";

describe('Pruebas en useFetchGifs() hook personalizado', () => {

    const inputValue = 'Dragon ball';

    test('Debe regresar el estado inicial', () => {
        const {result} = renderHook(() => useFetchGifs(inputValue))
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un arreglo de imágenes y el isLoading en true', async () => {
        const {result} = renderHook(() => useFetchGifs(inputValue))
        // Esperar el resultado del hook
        await waitFor(
            () => {
                expect(result.current.images.length).toBeGreaterThan(0)
            }
        );
        // evaluar
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });

});
