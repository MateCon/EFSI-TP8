import { useContext } from "react";
import { ContactosContext } from "../components/contactoProvider";

function Contactos() {
  const { contactos } = useContext(ContactosContext);

  return (
      <section className="mx-auto w-[95%] md:w-[750px]">
          <h2 className="text-2xl font-semibold mb-4">Contactos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:6 lg:8">
            {Object.values(contactos).map((contacto) => <div key={contacto.nombre}>
              <p className="font-bold text-xl">{contacto.nombre}</p>
              <p>Mensajes: </p>
              <ul>
                {contacto.mensajes.map((mensaje, i) => <li key={`${contacto.nombre}-${i}`}>- {mensaje}</li>)}
              </ul>
            </div>)}
          </div>
      </section>
  );
}

export default Contactos;
