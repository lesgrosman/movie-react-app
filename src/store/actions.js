import { getData } from '../services/services'

export const getMovies = (name, searchBy, param) => {
  return dispatch => {
    dispatch(isError(false))
    dispatch(isLoading(true))
    dispatch(isNoData(false))
    getData(searchBy, param) // Invoking the request depending on filters after 
      .then(response => {
        const results = response.data.results
        dispatch(isLoading(false))
        results.length > 0 ? dispatch(setList(name, results)) : dispatch(isNoData(true))
      })
      .catch(e => {
        dispatch(isLoading(false))
        dispatch(isError(e))
      })
  }
}

const isLoading = (loading) => {
  return {
    type: 'IS_LOADING',
    loading
  }
}

const isError = (error) => {
  return {
    type: 'IS_ERROR',
    error
  }
}

const isNoData = (noData) => {
  return {
    type: 'IS_NO_DATA',
    noData
  }
}

const setList = (name, results) => {
  return {
    type: 'SET_LIST',
    name,
    results
  }
}