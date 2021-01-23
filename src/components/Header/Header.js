import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.Header}>
      <Link to="/">Main Page</Link>
      <span>Movie App</span>
      <Link to="/search_page">Search</Link>
    </div>
  )
}

export default Header
