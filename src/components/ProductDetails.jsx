import React from 'react'
import '../styles/ProductDetails.css'

const ProductDetails = ({ details }) => {
  let { image, title, price, currency, shipping, location, quantity } = details

  return (
    <div className="details-container">
      <div className="product-details">
        <div className="product-images">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>

        <div className="product-image">
          <img src={image} alt="Product Image" />
        </div>

        <div className="product-info">
          <h2 className="product-title">{title}</h2>
          <p className="product-price">
            {currency} {price}
          </p>
          {shipping === 'free' && (
            <p className="shipping">Envío gratis a todo el país</p>
          )}
          <p className="location">{location}</p>
          <p className="units">
            {quantity > 1 && `${quantity} unidades disponibles`}
            {quantity === '0' && `${quantity} unidades disponibles`}
            {quantity === '1' && `${quantity} unidad disponible`}
          </p>
          <div className="buy">
            <button className="buy-btn">Comprar Ahora</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
