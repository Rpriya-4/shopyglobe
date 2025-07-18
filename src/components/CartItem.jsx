import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()

  return (
    <div style={styles.card}>
      <img src={item.thumbnail} alt={item.title} style={styles.image} />
      <div>
        <h3>{item.title}</h3>
        <p>Price: ₹{item.price} × {item.quantity}</p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          style={styles.button}

  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}


        >
          Remove
        </button>
      </div>
    </div>
  )
}

const styles = {
  card: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f3ececff',
  },
  image: {
    width: '100px',
    borderRadius: '5px',
  },
  button: {
    marginTop: '0.5rem',
    padding: '6px 12px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
       cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    fontWeight : 'bold',
  },
}

export default CartItem
