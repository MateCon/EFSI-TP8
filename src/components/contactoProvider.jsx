import * as React from "react";
import { localstorage_load, localstorage_save } from "../utils/localstorage";

export const ContactosContext = React.createContext();

export default function ContactoProvider({ children }) {
    const [contactos, setContactos] = React.useState(localstorage_load("contacto") || {});

    const setContactosWrapper = (val) => {
        setContactos(val);
        localstorage_save("contacto", val);
    }

    return (
        <ContactosContext.Provider value={{ contactos, setContactos: setContactosWrapper }}>{children}</ContactosContext.Provider>
    )
}