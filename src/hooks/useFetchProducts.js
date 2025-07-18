import { useEffect, useState } from 'react'

const useFetchProducts = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
        setProducts(data.products)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to fetch products')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}

export default useFetchProducts
