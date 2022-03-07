import React from 'react'

// Styles
import '../styles/Home.css'

// Components
import Product from './Product'

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
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_905176-MLV43506956032_092020-AB.webp'
            }
            title={
              'Teléfono Android Celular Krip K4m 3g 1gb Ram (sin Cargador)'
            }
            price={'69.99'}
            currency={'$'}
            shipping={''}
          />
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_662952-MLV32048276000_092019-AB.webp'
            }
            price={'56.99'}
            currency={'$'}
            shipping={'free'}
          />
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_892986-MLV31248930335_062019-AB.webp'
            }
            currency={'$'}
            price={'15.99'}
            shipping={'free'}
          />
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_704175-MLV46485100423_062021-AB.webp'
            }
            price={'99.99'}
            currency={'$'}
            shipping={''}
          />
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_905176-MLV43506956032_092020-AB.webp'
            }
            price={'69.99'}
            currency={'$'}
            shipping={''}
          />
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_662952-MLV32048276000_092019-AB.webp'
            }
            price={'56.99'}
            currency={'$'}
            shipping={'free'}
          />
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_892986-MLV31248930335_062019-AB.webp'
            }
            currency={'$'}
            price={'15.99'}
            shipping={'free'}
          />
          <Product
            img={
              'https://http2.mlstatic.com/D_Q_NP_704175-MLV46485100423_062021-AB.webp'
            }
            price={'99.99'}
            currency={'$'}
            shipping={''}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
