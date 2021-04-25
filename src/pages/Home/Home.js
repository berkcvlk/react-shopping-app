import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import "./Home.scss";

import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

function Home(props) {
  const productContext = useContext(ProductContext);

  return (
    <main className="main">
      <ProductsContainer />
      {productContext.products.map((el) => (
        <li>{el.id}</li>
      ))}
    </main>
  );
}

export default Home;
