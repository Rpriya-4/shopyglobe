// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
//     <header style={styles.header}>
//       <h1 style={styles.logo}>🛒 ShoppyGlobe</h1>
//        <nav style={styles.nav}>
//         <Link to="/" style={styles.link}>Home 🏠</Link>
//         <Link to="/cart" style={styles.link}>Cart 🛍️</Link>
//       </nav>
//     </header>
//   )
// }





// import React from 'react'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)


    const [hoverHome, setHoverHome] = useState(false)
  const [hoverCart, setHoverCart] = useState(false)
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🛒 ShoppyGlobe</h1>
      <nav style={styles.nav}>
        <Link to="/" style={{
          ...styles.link ,color:hoverHome ?'#00bcd4':'#fff',cursor: 'pointer' }}


onMouseEnter={() => setHoverHome(true)}
          onMouseLeave={() => setHoverHome(false)}


        >Home 🏠</Link>
        <Link to="/cart" style={{
          ...styles.link,color:hoverCart?'#00bcd4':'#fff',cursor : 'pointer'}}


onMouseEnter={() => setHoverCart(true)}
    onMouseLeave={() => setHoverCart(false)}
        >
          Cart 🛍️ <span style={styles.badge}>{totalItems}</span>
        </Link>
      </nav>
    </header>
  )
}







// Style for layout
const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#242424',
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    fontSize: '1.5rem',
  },
  link: {
    marginLeft: '1rem',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition :'0.3s',
    cursor: 'pointer',
  },

 badge: {
    backgroundColor: '#ffc107',
    color: '#000',
    borderRadius: '50%',
    padding: '2px 8px',
    fontSize: '0.8rem',
    marginLeft: '6px',
  },

}

export default Header
