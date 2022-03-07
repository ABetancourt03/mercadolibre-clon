import React from 'react'

const Product = ({ img, title, price, currency, shipping }) => {
  return (
    <div className="product">
      <img src={img} alt="Product" />
      <div className="price">
        <h2>
          {currency} {price}
        </h2>
        {shipping === 'free' && <p className="shipping">Envío gratis</p>}
        <p className="product-title">{title}</p>
      </div>
    </div>
  )
}

export default Product
