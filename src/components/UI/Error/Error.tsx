import classes from './Error.module.css'

const Error = ({ error }: { error?: number }) => {
  switch (error) {
    case 404:
      return <h3 className={classes.Error}>Probably bad URL</h3>
    case 401:
      return <h3 className={classes.Error}>Oops... invalid API key</h3>
    default:
      return (
        <h3 className={classes.Error}>
          Error status {error}. Something has gone wrong on the web server. Try again later.
        </h3>
      )
  }
}

export default Error
