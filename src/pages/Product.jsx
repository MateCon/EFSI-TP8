import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CarritoContext } from "../components/carritoProvider";

export default function Product() {
    const { id } = useParams();
    const [producto, setProducto] = useState();
    const { carrito, setCarrito } = useContext(CarritoContext);

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProducto(data);
        })()
    }, []);

    if (!producto) return <div>Cargando...</div>

    return (
        <section className="mx-auto w-[95%] md:w-[750px]">
            <h2 className="text-2xl font-semibold mb-4"><img src={producto?.thumbnail} /></h2>
            <h1 className="text-2xl">{producto?.title}</h1>
            <p>{producto?.description}</p>
            <p>Precio: {producto?.price}</p>
            <p>Marca: {producto?.brand}</p>
            <p>Rating: {producto?.rating}/5</p>
            <p>Stock: {producto?.stock}</p>
            {carrito[id]
                ? <button onClick={() => {
                    const newCarrito = {...carrito};
                    delete newCarrito[id];
                    setCarrito(newCarrito);
                }} className="bg-red-500 px-4 py-2 rounded-md text-white w-full font-semibold text-xl">Eliminar</button>
                : <button onClick={() => {
                    setCarrito({ ...carrito, [id]: producto });
                }} className="bg-green-500 px-4 py-2 rounded-md text-white w-full font-semibold text-xl">Agregar</button>}
        </section>
    );
}
