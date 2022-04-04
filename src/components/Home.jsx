import React from 'react'

// Styles
import '../styles/Home.css'

// Components
import Product from './Product'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Slider'>
        <img src='src/public/slider/1.webp' alt='Slider Image' />
      </div>

      <div className='title'>
        <h2>Basado en tu última visita</h2>
        <a href=''>Ver historial</a>
      </div>
      <div className='home'>
        <div className='products'>
          <Product
            img='src/public/products/krip/1.webp'
            title='Teléfono Android Celular Krip K4m 3g 1gb Ram (sin Cargador)'
            price='69.99'
            currency='$'
            shipping=''
          />
          <Product
            img='src/public/products/cafetera/1.webp'
            price='56.99'
            currency='$'
            shipping='free'
          />
          <Product
            img='src/public/products/perolito/1.webp'
            currency='$'
            price='15.99'
            shipping='free'
          />
          <Product
            img='src/public/products/forro/1.webp'
            price='99.99'
            currency='$'
            shipping=''
          />
        </div>
      </div>
    </div>
  )
}

export default Home
