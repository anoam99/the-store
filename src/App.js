import React, {useState} from 'react'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import ProductList from './components/prodoctList'
import CartList from './components/cartList'
import Description from './components/description'
import Default from './components/default'
import 'bootstrap/dist/css/bootstrap.min.css'
import {storeProducts} from './data'



function App() {
  
  const [products] = useState(storeProducts);
  const [tempProduct, updateTempProduct] = useState({})
  const [cart, updateCart] = useState([])
  
  // console.log(cart)

  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
           <ProductList product={products} updateTempProduct={updateTempProduct} cart={cart} updateCart={updateCart}/>
          </Route>
          <Route exact path="/cart">
           <CartList updateTempProduct={updateTempProduct} cart={cart} updateCart={updateCart} />
          </Route>
          <Route exact path="/description">
           <Description product={tempProduct} updateTempProduct={updateTempProduct} cart={cart} updateCart={updateCart}/>
          </Route>
          <Route>
           <Default />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
