import GifItem from "./GifItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;