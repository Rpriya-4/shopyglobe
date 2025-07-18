// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addToCart } from '../redux/cartSlice'

// const ProductItem = ({ product }) => {
//   const dispatch = useDispatch()

//   const handleAddToCart = () => {
//     dispatch(addToCart(product))
//   }

//   return (
//     <div style={styles.card}>
//       <img src={product.thumbnail} alt={product.title} style={styles.image} />
//       <h3>{product.title}</h3>
//       <p>₹{product.price}</p>
//       <div style={styles.buttons}>
//         <Link to={`/product/${product.id}`} style={styles.link}
       
//        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
//   onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        

//         >View</Link>
    
//         <button onClick={handleAddToCart} style={styles.button}

//  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
//   onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}

//         >Add to Cart</button>
//       </div>
//     </div>
//   )
// }

// const styles = {
//   card: {
//     border: '1px solid #ccc',
//     padding: '1rem',
//     borderRadius: '8px',
//     backgroundColor: '#f3ececff',
//      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//     transition: 'transform 0.2s ease , box- shadow 0.2s ease',
//     textAlign : 'center',
//   },
//   image: {
//     width: '100%',
//     height: '150px',
//     objectFit: 'cover',
//   },
//   buttons: {
//     marginTop: '1rem',
//     display: 'flex',
//     justifyContent: 'space-between',
//     fontWeight: 'bold',
//   },
//   link: {
//     textDecoration: 'none',
//     padding: '6px 10px',
//     backgroundColor: '#444',
//     color: 'white',
//     borderRadius: '4px',
//     cursor : 'pointer',
//     transition : '0.2s ease-in-out',
//   },
//   button: {
//     padding: '8px 16px',
//     backgroundColor: '#28a745',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     fontWeight: 'bold',
//     cursor: 'pointer', // 👈 adds pointer on hover
//     transition: 'background-color 0.3s ease, transform 0.1s',
//   },
// }

// export default ProductItem



import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  // When "Add to cart" is clicked
  const handleAddToCart = () => {
    dispatch(addToCart(product))
  }

  return (
    <div
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'
      }}
    >
      <img src={product.thumbnail} alt={product.title} style={styles.image} />
      <h3 style={styles.title}>{product.title}</h3>
      <p style={styles.price}>₹{product.price}</p>
      <div style={styles.buttons}>
        <Link
          to={`/product/${product.id}`}
          style={styles.link}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          View
        </Link>
        <button
          onClick={handleAddToCart}
          style={styles.button}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.95)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
// Inline css styles
const styles = {
  card: {
    border: '1px solid #eee',
    padding: '1rem',
    borderRadius: '16px',
    backgroundColor: '#f3ececff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '0.75rem',
  },
  title: {
    fontSize: '1rem',
    fontWeight: '600',
    margin: '0.5rem 0',
  },
  price: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.75rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.5rem',
  },
  link: {
    textDecoration: 'none',
    padding: '8px 14px',
    backgroundColor: '#444',
    color: 'white',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  button: {
    padding: '8px 14px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.1s ease-in-out, background-color 0.3s',
  },
}

export default ProductItem

