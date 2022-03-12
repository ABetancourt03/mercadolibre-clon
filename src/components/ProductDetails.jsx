import React, { useState } from 'react'
import '../styles/ProductDetails.css'

const initialImage = '../src/public/products/krip/1.webp'

const ProductDetails = ({ details }) => {
  let { title, price, currency, shipping, location, quantity } = details
  const [image, setImage] = useState(initialImage)

  const handleChangeImage = e => {
    if (e.target.id === 'image1') {
      setImage('../src/public/products/krip/1.webp')
    } else if (e.target.id === 'image2') {
      setImage('../src/public/products/krip/2.webp')
    } else if (e.target.id === 'image3') {
      setImage('../src/public/products/krip/3.webp')
    }
  }

  return (
    <div className='details-container'>
      <div className='product-details'>
        <div className='product-images'>
          <div className='image'>
            <img
              onClick={handleChangeImage}
              id='image1'
              width='50px'
              src='../src/public/products/krip/1.webp'
              alt='Image 1'
            />
          </div>
          <div className='image'>
            <img
              onClick={handleChangeImage}
              id='image2'
              width='50px'
              src='../src/public/products/krip/2.webp'
              alt='Image 2'
            />
          </div>
          <div className='image'>
            <img
              onClick={handleChangeImage}
              id='image3'
              width='50px'
              src='../src/public/products/krip/3.webp'
              alt='Image 3'
            />
          </div>
        </div>

        <div className='product-image'>
          <img src={image} alt='Product Image' />
        </div>

        <div className='product-info'>
          <h2 className='product-title'>{title}</h2>
          <p className='product-price'>
            {currency} {price}
          </p>
          {shipping === 'free' && (
            <p className='shipping'>Envío gratis a todo el país</p>
          )}
          <p className='location'>{location}</p>
          <p className='units'>
            {quantity > 1 && `${quantity} unidades disponibles`}
            {quantity === '0' && `${quantity} unidades disponibles`}
            {quantity === '1' && `${quantity} unidad disponible`}
          </p>
          <div className='buy'>
            <button className='buy-btn'>Comprar Ahora</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
