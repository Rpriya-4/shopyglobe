import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const Cart = lazy(() => import('./pages/Cart'))
const ProductDetail = lazy(() => import('./pages/ProductDetail'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  return (
    <>
      <Header />

      {/* Wrap routes with suspense for fallback during lazy loading */}
      <Suspense fallback={<div style={{ padding: '2rem' }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
