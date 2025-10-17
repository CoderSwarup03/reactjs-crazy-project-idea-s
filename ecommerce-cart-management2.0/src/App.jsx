import React from 'react'
import ProductList from './components/ProductList'
import CartList from './components/CartList'

const App = () => {
  return (
    <>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-3'>
          <div className='col-span-2 gap-2'>
            <ProductList />
          </div>
          <div>
            <CartList />
          </div>
        </div>
      </div>

    </>
  )
}

export default App