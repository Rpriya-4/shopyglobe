import { createSlice } from '@reduxjs/toolkit'

// Initial state pf the cart
const initialState = {
  cartItems: [],
}

// Creating the cart slice with renders
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action:Add item to the cart
    addToCart(state, action) {
      const item = action.payload
      const existing = state.cartItems.find(i => i.id === item.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.cartItems.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
