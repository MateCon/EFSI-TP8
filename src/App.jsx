import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Product from "./pages/Product";
import Products from "./pages/Products";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";

export const CarritoContext = React.createContext();

export default function App() {
    const [carrito, setCarrito] = React.useState({});

    return (
        <CarritoContext.Provider value={{ carrito, setCarrito }}>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="productos" element={<Products />} />
                        <Route path="producto/:id" element={<Product />} />
                        <Route path="quienes-somos" element={<QuienesSomos />} />
                        <Route path="contacto" element={<Contacto />} />
                    </Route>
                </Routes>
            </Router>
        </CarritoContext.Provider>
    );
}

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
