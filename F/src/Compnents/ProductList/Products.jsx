import React, { useState } from "react";
import "../../Styles/Products.css";
import { Btn } from "./Button";

let BoxStyle = {
  minHeight: "200px",
  minWidth: "200px",
  backgroundColor: "whitesmoke",
  boxShadow: "2px 2px 5px black"
};

export const Products = (props) => {
  let ProductStockInfo = props.SingleProduct.isAvailable ? "Available" : "Unavailable";

  let [ProductStock, SetProductStock] = useState(0);

  let Add = () => {
    SetProductStock(ProductStock + 1);
  };

  let Sub = () => {
    SetProductStock(ProductStock - 1);
  };

  return (
    <div className="row">
      <div className="col PC-1" style={BoxStyle}>
        <div className="row">
          <div className="col-10">
            <h3 className="ProductTitle">{props.SingleProduct.name}</h3>
            <p className="ProductDescription">{props.SingleProduct.description}</p>
            <h5 className="ProductPrice" style={{ display: "inline" }}>
              Price: {props.SingleProduct.price}
            </h5>
            <span
              className={
                ProductStockInfo === "Available"
                  ? "bg-success p-1 rounded text-white"
                  : "bg-danger p-1 rounded text-white"
              }
            >
              {ProductStockInfo}
            </span>
            <div className="ProductStock">
              <Btn children="-" EventHandler={Sub} />
              <span className="StockDetails">{ProductStock}</span>
              <Btn children="+" EventHandler={Add} />
            </div>
          </div>
          <div className="col-2">
            <img src={URL.createObjectURL(props.SingleProduct.image)} alt="" className="ProductImage img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};
