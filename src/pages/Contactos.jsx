import { useContext } from "react";
import { ContactosContext } from "../components/contactoProvider";

function Contactos() {
  const { contactos } = useContext(ContactosContext);

  return (
      <section className="mx-auto w-[95%] md:w-[750px]">
          <h2 className="text-2xl font-semibold mb-4">Carrito</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:6 lg:8">
              {contactos.map((contacto, index) => <p key={index}>{contacto.nombre}</p>)}
          </div>
      </section>
  );
}

export default Contactos;
