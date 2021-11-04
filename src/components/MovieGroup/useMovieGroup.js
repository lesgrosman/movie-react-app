import { useState, useEffect } from 'react';
import { getData } from '../../services/services'
import { getItems } from '../../utils/personTransformFramework'


export const useMovieGroup = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [movies, setMovies] = useState(null);

  const { searchBy, type, param } = props;


  useEffect(() => {
    setError(false)
    setLoading(true)   
    getData(searchBy, param) // Invoking the request depending on filters after 
      .then(response => {
        const results = response.data.results
        setLoading(false)
        setMovies(getItems(results, type))
      })
      .catch(e => {
        setLoading(false)
        setError(e)
      })
  }, [ param, searchBy, type ]);

  return { movies, error, loading };
}
