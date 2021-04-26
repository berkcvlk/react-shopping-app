import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [logInfo, setLogInfo] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [error, setError] = useState(false);

  const loginHandler = (email, pass) => {
    // LocalStorage'da var mı?
    // get user from "users"
  };

  const registerHandler = (e, email, password, passwordConfirm) => {
    e.preventDefault();

    checkPassword(password, passwordConfirm);

    if (error) {
      return;
    }

    // LocalStorage, users, varsa çekmek
  };

  const checkPassword = (password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      setError(true);
    }else {
      setError(false);
    }
  };

  /** Get data from local data.json */
  const getData = async () => {
    const response = await axios.get("./data.json");
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: products,
        onRegister: registerHandler,
        error: error
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
