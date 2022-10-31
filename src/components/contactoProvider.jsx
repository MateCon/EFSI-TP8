import * as React from "react";

export const ContactosContext = React.createContext();

export default function ContactoProvider({ children }) {
    const [contactos, setContactos] = React.useState([]);

    return (
        <ContactosContext.Provider value={{ contactos, setContactos }}>{children}</ContactosContext.Provider>
    )
}