import React, { useState } from 'react'
import '../styles/ProductDetails.css'

const initialImage =
  'https://http2.mlstatic.com/D_Q_NP_905176-MLV43506956032_092020-AB.webp'

const ProductDetails = ({ details }) => {
  let { title, price, currency, shipping, location, quantity } = details
  const [image, setImage] = useState(initialImage)

  const handleChangeImage = e => {
    if (e.target.id === 'image1') {
      setImage(
        'https://http2.mlstatic.com/D_Q_NP_905176-MLV43506956032_092020-AB.webp'
      )
    } else if (e.target.id === 'image2') {
      setImage(
        'https://http2.mlstatic.com/D_NQ_NP_740232-MLV43506953124_092020-O.webp'
      )
    } else if (e.target.id === 'image3') {
      setImage(
        'https://http2.mlstatic.com/D_NQ_NP_624629-MLV43506945617_092020-O.webp'
      )
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
              src='https://http2.mlstatic.com/D_Q_NP_905176-MLV43506956032_092020-AB.webp'
              alt='Image 1'
            />
          </div>
          <div className='image'>
            <img
              onClick={handleChangeImage}
              id='image2'
              width='50px'
              src='https://http2.mlstatic.com/D_NQ_NP_740232-MLV43506953124_092020-O.webp'
              alt='Image 2'
            />
          </div>
          <div className='image'>
            <img
              onClick={handleChangeImage}
              id='image3'
              width='50px'
              src='https://http2.mlstatic.com/D_NQ_NP_624629-MLV43506945617_092020-O.webp'
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
