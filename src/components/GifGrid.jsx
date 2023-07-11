import GifItem from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h4>Cargando...</h4>)
            }
            <div className={'card-grid'}>
                {
                    images.map(image => (
                        <GifItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    );
};

export default GifGrid;