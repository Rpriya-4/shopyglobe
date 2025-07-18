import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setProduct(data)
      } catch (error) {
        console.error('Failed to fetch product detail:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <p>Loading...</p>
  if (!product) return <p>Product not found</p>

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: '300px', borderRadius: '8px' }} />
      <p>{product.description}</p>
      <p><strong>Price: ₹{product.price}</strong></p>
      <button
        onClick={() => dispatch(addToCart(product))}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          marginTop: '1rem',
          cursor: 'pointer'
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDetail
