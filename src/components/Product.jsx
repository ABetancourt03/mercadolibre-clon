import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ img, title, price, currency, shipping }) => {
  return (
    <Link to="/products/product1" className="product">
      <img src={img} alt="Product" />
      <div className="price">
        <h2>
          {currency} {price}
        </h2>
        {shipping === 'free' && <p className="shipping">Envío gratis</p>}
        <p className="p-title">{title}</p>
      </div>
    </Link>
  )
}

export default Product
