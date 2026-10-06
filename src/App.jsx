import { useReducer, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import { Link } from 'react-router-dom'
import { cartReducer, initialState } from './cart/cartReducer'






function App() {
  const [loggedUser, setLoggedUser] = useState()
  const [state,dispatch] = useReducer(cartReducer, initialState)

  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login setLoggedUser={setLoggedUser}/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/dashboard" element={<Dashboard loggedUser={loggedUser} setLoggedUser={setLoggedUser}
      dispatch={dispatch}
      />}></Route>
      <Route path="/product-details/:ProdID" element={<ProductDetails/>}></Route>
      <Route path='/cart' element={<Cart state={state} dispatch={dispatch}/>}></Route>





     </Routes>
    
     

     </BrowserRouter>
  )
}

export default App
