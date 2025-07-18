// import React, { useEffect, useState } from 'react'
// import useFetchProducts from '../hooks/useFetchProducts'
// import ProductItem from '../components/ProductItem'

// const ProductList = () => {
//   const [products, setProducts] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const res = await fetch('https://dummyjson.com/products')
//         const data = await res.json()
//         setProducts(data.products)
//       } catch (error) {
//         console.error('Failed to fetch products:', error)
//       }
//     }

//     fetchProducts()
//   }, [])

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2>🛍️ Browse Products</h2>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={{
//           padding: '8px',
//           marginBottom: '1rem',
//           width: '100%',
//           maxWidth: '400px',
//           fontSize: '1rem',
//         }}
//       />
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
//         {filteredProducts.map(product => (
//           <ProductItem key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ProductList


import React, { useState } from 'react'
import useFetchProducts from '../hooks/useFetchProducts'
import ProductItem from '../components/ProductItem'

// import necessary hooks and components
const ProductList = () => {
  const { products, loading, error } = useFetchProducts()
  const [searchTerm, setSearchTerm] = useState('')

  // filter product based on user input
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛍️ Browse Products</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          // padding: '8px',
          // marginBottom: '1rem',
          // width: '100%',
          // maxWidth: '400px',
          // fontSize: '1rem',


// style={{
  padding: '10px 16px',
  marginBottom: '1.5rem',
  width: '100%',
  maxWidth: '400px',
  fontSize: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s',
  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',




        }}
      />

      {loading && <p>Loading products...</p>}
      {error && <p>{error}</p>}

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: '1rem' 
      }}>
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList

