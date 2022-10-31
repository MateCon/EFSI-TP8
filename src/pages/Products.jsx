import Products from "../components/products";

function Home() {
  return (
    <section className="mx-auto w-[95%] md:w-[750px]">
        <Products cant={30} title="Productos" />
    </section>
  );
}

export default Home;
