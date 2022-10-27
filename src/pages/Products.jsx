import { useContext } from "react";
import { CarritoContext } from "../App";
import Products from "../components/products";

function Home() {
  const { carrito, setCarrito } = useContext(CarritoContext);

  console.log(carrito)

  return (
    <section className="mx-auto w-[95%] md:w-[750px]">
        <Products cant={30} title="Productos" />
    </section>
  );
}

export default Home;
