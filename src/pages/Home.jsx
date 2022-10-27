import Products from "../components/products";
import Carousel from "../components/carousel";
import Sponsors from "../components/sponsors";

function Home() {
  return (
    <div>
      <Carousel images={["../img/slider.png", "../img/slider.png", "../img/slider.png"]} />
      <Products cant={5} title={"Productos Destacados"} />
      <Sponsors />
    </div>
  );
}

export default Home;
