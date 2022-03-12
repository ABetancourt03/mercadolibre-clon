import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'

const Details1 = {
  image: 'src/public/products/krip/1.webp',
  title: 'Teléfono Android Celular Krip K4m 3g 1gb Ram (sin Cargador)',
  price: '69.99',
  currency: '$',
  shipping: 'free',
  location: 'Mun. Libertador (Suroeste), Distrito Capital',
  quantity: '50'
}

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route
            exact
            path='/products/product1'
            children={<ProductDetails details={Details1} />}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App
