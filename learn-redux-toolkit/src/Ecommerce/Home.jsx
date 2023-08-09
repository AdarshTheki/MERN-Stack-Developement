import React from 'react'
import ProductLists from './ProductLists'
import Cart from './Cart.jsx'
import { store } from './store'
import { Provider } from 'react-redux'

const Home = () => {
  return (
    <Provider store={store}>
      <ProductLists/>
      <hr />
      <Cart/>
    </Provider>
  )
}

export default Home
