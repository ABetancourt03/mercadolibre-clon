import React from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="Home">
      <div className="Slider">
        <img
          src="https://http2.mlstatic.com/D_NQ_650676-MLA49205723737_022022-OO.webp"
          alt="Slider Image"
        />
      </div>

      <div className="title">
        <h2>Basado en tu última visita</h2>
        <a href="">Ver historial</a>
      </div>
      <div className="home">
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
