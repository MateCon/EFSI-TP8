import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Product from "./pages/Product";
import Products from "./pages/Products";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import CarritoProvider from "./components/carritoProvider";
import Carrito from "./pages/Carrito";
import ContactoProvider from "./components/contactoProvider";
import Contactos from "./pages/Contactos";

export default function App() {
    return (
        <CarritoProvider>
        <ContactoProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="productos" element={<Products />} />
                        <Route path="carrito" element={<Carrito />} />
                        <Route path="contactos" element={<Contactos />} />
                        <Route path="producto/:id" element={<Product />} />
                        <Route path="quienes-somos" element={<QuienesSomos />} />
                        <Route path="contacto" element={<Contacto />} />
                    </Route>
                </Routes>
            </Router>
        </ContactoProvider>
        </CarritoProvider>
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
