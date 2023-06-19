const ErrorMessage = ({ error }: { error?: number }) => {
  switch (error) {
    case 404:
      return <h3 className='m-[50px] text-center'>Probably bad URL</h3>
    case 401:
      return <h3 className='m-[50px] text-center'>Oops... invalid API key</h3>
    default:
      return (
        <h3 className='m-[50px] text-center'>
          Error status {error}. Something has gone wrong on the web server. Try again later.
        </h3>
      )
  }
}

export default ErrorMessage
