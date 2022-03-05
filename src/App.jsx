import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id'></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
