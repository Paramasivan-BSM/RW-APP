import React,{useState} from "react";
import "../../Styles/Products.css";
import { Btn } from "./Button";

let boxStyle = {
  minHeight: "200px",
  minWidth: "200px",
  backgroundColor: "whitesmoke",
  boxShadow: "2px 2px 5px black"
};

export const Products = (props) => {
  // Create a state to track the stock of all products
  const [productStocks, setProductStocks] = useState(
    props.products.map(() => 0)
  );

  const add = (index) => {
    const newProductStocks = [...productStocks];
    newProductStocks[index] += 1;
    setProductStocks(newProductStocks);
  };

  const sub = (index) => {
    const newProductStocks = [...productStocks];
    newProductStocks[index] -= 1;
    setProductStocks(newProductStocks);
  };

  return (
    <div className="row">
      {props.products.map((product, index) => {
        let productStockInfo = product.isAvailable ? "Available" : "Unavailable";

        return (
          <div className="col PC-1" style={boxStyle} key={product.PID}>
            <div className="row">
              <div className="col-10">
                <h3 className="ProductTitle">{product.Name}</h3>
                <p className="ProductDescription">{product.Desc}</p>
                <h5 className="ProductPrice" style={{ display: "inline" }}>
                  Price: {product.Price}
                </h5>
                <span
                  className={
                    productStockInfo === "Available"
                      ? "bg-success p-1 rounded text-white"
                      : "bg-danger p-1 rounded text-white"
                  }
                >
                  {productStockInfo}
                </span>
                <div className="ProductStock">
                  <Btn children="-" EventHandler={() => sub(index)} />
                  <span className="StockDetails">{productStocks[index]}</span>
                  <Btn children="+" EventHandler={() => add(index)} />
                </div>
              </div>
              <div className="col-2">
                {product.Image && (
                  <img src={URL.createObjectURL(product.Image)} alt="" className="ProductImage img-fluid" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
