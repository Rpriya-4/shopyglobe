import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../redux/cartSlice'
import CartItem from '../components/CartItem'

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const dispatch = useDispatch()

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛍️ Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {/* {cartItems.map(item => (
            <div key={item.id} style={styles.card}>
              <img src={item.thumbnail} alt={item.title} style={styles.image} />
              <div>
                <h3>{item.title}</h3>
                <p>Price: ₹{item.price} × {item.quantity}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  style={styles.button}
                >
                  Remove
                </button>
              </div>
            </div>
          ))} */}
          {cartItems.map(item => (
  <CartItem key={item.id} item={item} />
))}


          <h3>Total: ₹{total}</h3>
        </div>
      )}
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
    backgroundColor: '#fff',
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
  },
}

export default Cart
