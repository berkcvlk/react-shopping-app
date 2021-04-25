import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  /** Get data from local data.json */
  const getData = async () => {
    const response = await axios.get("./data.json");
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
