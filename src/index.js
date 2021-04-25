import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import ProductContext from "./context/ProductContext";

ReactDOM.render(
  <ProductContext>
    <App />
  </ProductContext>,
  document.getElementById("root")
);
