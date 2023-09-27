import {getGifs} from "../../src/helpers/getGifs.js";

describe('Test en getGifs() helper', () => {
    test('Debe retornar un arreglo de gifs', async () => {
        const gifs = await getGifs('Dragon ball');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    });
});