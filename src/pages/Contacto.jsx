import { useState } from "react";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { ContactosContext } from "../components/contactoProvider"

function Form({ nombre, mensaje, setNombre, setMensaje, onSubmit }) {
    return (
        <form className="flex flex-col w-[500px] max-w-full x-8" onSubmit={onSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" className="border-b" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name="mensaje" id="" cols="30" rows="10" className="border rounded-md" value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
            <button type="submit">Enviar</button>
        </form>
    )
}

Form.propTypes = {
    nombre: PropTypes.string,
    mensaje: PropTypes.string,
    setNombre: PropTypes.func,
    setMensaje: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default function Contacto() {
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const { contactos, setContactos } = useContext(ContactosContext)

    const onSubmit = (e) => {
        e.preventDefault();
        setContactos ([...contactos, { nombre, mensaje }])
    }

    return (
        <div className="grid place-content-center">
            <Form {...{nombre, mensaje, setNombre, setMensaje, onSubmit }}  />
        </div>
    )
}
