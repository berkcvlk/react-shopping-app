import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import Categories from "../../components/Categories/Categories";

import { useState } from "react";

function Products(props) {
  const [category, setCategory] = useState("Technology");

  const categoryHandler = (categoryName) => {
    setCategory(categoryName);
  };

  return (
    <>
      <Categories categoryHandler={categoryHandler} />
      <ProductsContainer filter={category} />
    </>
  );
}

export default Products;
