import * as React from "react";
import { localstorage_load, localstorage_save } from "../utils/localstorage";

export const CarritoContext = React.createContext();

export default function CarritoProvider({ children }) {
    const [carrito, setCarrito] = React.useState(localstorage_load("carrito") || {});

    const setCarritoWrapper = (val) => {
        setCarrito(val);
        localstorage_save("carrito", val);
    }

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito: setCarritoWrapper }}>{children}</CarritoContext.Provider>
    )
}