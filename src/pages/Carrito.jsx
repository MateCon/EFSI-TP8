import { CarritoContext } from "../components/carritoProvider";
import { useContext } from "react";
import Card from "../components/card";

function Home() {
  const { carrito, setCarrito } = useContext(CarritoContext);

  return (
      <section className="mx-auto w-[95%] md:w-[750px]">
          <h2 className="text-2xl font-semibold mb-4">Carrito</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:6 lg:8">
              {Object.values(carrito).map((producto, index) => <Card key={index} {...producto} href={`/producto/${producto.id}`} />)}
          </div>
      </section>
  );
}

export default Home;
