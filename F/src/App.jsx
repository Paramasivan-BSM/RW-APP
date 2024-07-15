import { useState, useEffect } from "react";
import {CreateProduct} from "./Compnents/CreateProduct/CreateProduct";
import {Products} from "./Compnents/ProductList/Products";

function App() {
  let [SingleProduct, setSingleProduct] = useState(null);

  let CreateProd = (product) => {
    setSingleProduct(product);
  };

  return (
    <>
      <CreateProduct CreateProd={CreateProd} />
      {SingleProduct && <Products SingleProduct={SingleProduct} />}
    </>
  );
}

export default App;
