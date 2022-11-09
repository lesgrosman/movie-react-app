import React from 'react'
import classes from './Error.module.css'

const Error = ({ error }) => {
  // Error handlers

  const errorStatus = error.response.status.toString()

  switch (errorStatus) {
    case '404':
      return <h3 className={classes.Error}>Error status {errorStatus}. Could not fetch URL.</h3>
    case '408':
      return (
        <h3 className={classes.Error}>
          Error status {errorStatus}. Request timeout. Try again later.
        </h3>
      )
    case '422':
      return (
        <h3 className={classes.Error}>
          Error status {errorStatus}. It seems like there is no movies you are looking for :(
        </h3>
      )
    case '500' || '503' || '505':
      return (
        <h3 className={classes.Error}>
          Error status {errorStatus}. Something has gone wrong on the web server. Try again later.
        </h3>
      )
    default:
      return null
  }
}

export default Error
