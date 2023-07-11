import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory
                onNewCategory={valueNewCategory => onAddCategory(valueNewCategory)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        category={category}
                        key={category}
                    />
                ))
            }
        </>
    )
}