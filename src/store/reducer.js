const initialState = {
  loading: true,
  error: false,
  noData: false,
  movies: {},
  moviesBySearch: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        loading: action.loading
      }
    case 'IS_ERROR':
      return {
        ...state,
        error: action.error
      }
    case 'IS_NO_DATA':
      return {
        ...state,
        noData: action.noData
      }
    case 'SET_LIST':
      return {
        ...state,
        movies: {...state.movies, [action.name]: action.results}
      }
    default:
      return state
  }
}

export default reducer