import "./Home.scss";

import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";

function Home(props) {

  return (
    <main className="main">
      <ProductsContainer filter="isPopular"/>
    </main>
  );
}

export default Home;
