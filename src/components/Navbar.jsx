import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import Search from 'search-react-input'

// Styles
import '../styles/Navbar.css'

const searchOptions = [{ product: 'Product 1' }]

const Navbar = () => {
  const [capturedSearch, setCapturedSearch] = useState(null)

  return (
    <div className='Navbar'>
      <div className='nav-top'>
        <Link to='/' className='nav-logo'>
          <img
            src='https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png'
            alt='Logo'
          />
        </Link>

        <Search
          width={'600px'}
          placeholder='Buscar productos, marcas y más...'
          options={searchOptions}
          onChange={(option, e) => setCapturedSearch(option)}
        />

        <img
          src='https://http2.mlstatic.com/D_NQ_636685-MLA48754422021_012022-OO.webp'
          title='DISFRUTA ENVÍOS GRATIS'
          alt='DISFRUTA ENVÍOS GRATIS'
        />
      </div>

      <div className='nav-bottom'>
        <div className='left'>
          <a href=''>Categorías</a>
        </div>

        <div className='mid'>
          <a href=''>Historial</a>
          <a href=''>Tiendas oficiales</a>
          <a href=''>Ofertas de la semana</a>
          <a href=''>Vender</a>
          <a href=''>Ayuda</a>
        </div>

        <div className='right'>
          <a href=''>Crea tu Cuenta</a>
          <a href=''>Ingresa</a>
          <a href=''>Mis Compras</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
