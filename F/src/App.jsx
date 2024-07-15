import { useState } from "react";
import { CreateProduct } from "./Compnents/CreateProduct/CreateProduct";
import { Products } from "./Compnents/ProductList/Products";

const initialProducts = [
  {
    PID: 1,
    Name: "Curd",
    Desc: "Nothing",
    isAvailable: true,
    Image: "",
    Price: 40
  }
];

function App() {
  let [products, setProducts] = useState(initialProducts);

  let createProd = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <>
      <CreateProduct createProd={createProd} />
      <Products products={products} />
    </>
  );
}

export default App;
