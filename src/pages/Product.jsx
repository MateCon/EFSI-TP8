import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
    const { id } = useParams();
    const [producto, setProducto] = useState();

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProducto(data);
        })()
    }, []);

    return (
        <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4"><img src={producto?.thumbnail} /></h2>
                <h1 className="text-2xl">{producto?.title}</h1>
                <p>{producto?.description}</p>
                <p>Precio: {producto?.price}</p>
                <p>Marca: {producto?.brand}</p>
                <p>Rating: {producto?.rating}/5</p>
                <p>Stock: {producto?.stock}</p>
        </section>
    );
}
