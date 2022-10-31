import React from "react";
import { useEffect, useState } from "react";
import Card from "./card";
import { Link } from "react-router-dom";
import { CarritoContext } from "../components/carritoProvider";
import { useContext } from "react";

export default function Products({ cant, title }) {
    const [productos, setProductos] = useState([]);
    const { carrito } = useContext(CarritoContext);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProductos(data.products.slice(0, cant));
        })()
    }, []);

    return (
        <section className="mx-auto w-[95%] md:w-[750px]">
            <div className="flex justify-between">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <p>{Object.keys(carrito).length} producto/s en el carrito</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:6 lg:8">
                {productos.map((producto, index) => <Card key={index} {...producto} href={`/producto/${producto.id}`} enCarrito={carrito[producto.id] !== undefined} />)}
            </div>
            {cant < 10 && <Link to="/productos">Ver mas</Link>}
        </section>
    );
}
