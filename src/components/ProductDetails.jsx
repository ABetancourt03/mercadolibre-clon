import React from 'react'
import '../styles/ProductDetails.css'

const ProductDetails = ({ details }) => {
  let { image, title, price, currency, shipping, quantity } = details

  return (
    <div className="details-container">
      <div className="product-details">
        <img src={image} alt="Product Image" />
        <h2>{title}</h2>
        <p className="price">
          {currency} {price}
        </p>
        {shipping === 'true' && <p className="shipping">Envío gratis</p>}
        <p className="units">
          {quantity > 1 && `${quantity} unidades disponibles`}
          {quantity === '0' && `${quantity} unidades disponibles`}
          {quantity === '1' && `${quantity} unidad disponible`}
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
