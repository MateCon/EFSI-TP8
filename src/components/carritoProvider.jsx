import * as React from "react";

export const CarritoContext = React.createContext();

export default function CarritoProvider({ children }) {
    const [carrito, setCarrito] = React.useState({});

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito }}>{children}</CarritoContext.Provider>
    )
}