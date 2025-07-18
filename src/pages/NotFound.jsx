
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={styles.container}>
      {/* Heading with 404 error */}
      <h2 style={styles.heading}>❌ 404 - Page Not Found</h2>

      {/* Message for user */}
      <p style={styles.message}>The page you are looking for does not exist.</p>

      {/* Link to go back to home */}
      <Link to="/" style={styles.link}>Go Back Home</Link>
    </div>
  )
}

// Inline styles for cleaner appearance
const styles = {
  container: {
    padding: '4rem',
    textAlign: 'center',
    color: '#333',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#dc3545',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  link: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
}

export default NotFound

