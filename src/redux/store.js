import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

// ceating redux store and adding cart slice to the reducer
export const store = configureStore({
  reducer: {
     cart: cartReducer,
  },
})

export default store
