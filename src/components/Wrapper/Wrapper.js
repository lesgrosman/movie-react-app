import React from 'react'
import classes from './Wrapper.module.css'

const Wrapper = ({ children }) => {

  return <div className={classes.Wrapper}>{children}</div>
  
}

export default Wrapper
