import React from "react";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://http2.mlstatic.com/D_Q_NP_905176-MLV43506956032_092020-AB.webp"
        alt="Product"
      />
      <div className="price">
        <h2>U$S 69.99</h2>
        <p className="shipping">Envío gratis</p>
      </div>
    </div>
  );
};

export default Product;
