import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDataById } from '../../services/services';
import { movieTransform } from '../../utils/transformFramework';
import { personTransrofm } from '../../utils/personTransformFramework';


export const useDetailContent = (props) => {
  const { id } = useParams();

  const { type } = props;

  const [movieObj, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => { 
    getDataById(type, id) 
      .then(response => {
        // if (type === 'person') {
        //   setItemObject(personTransrofm(response, type))
        // } else {
        setMovie(movieTransform(response, type))
        // }
        setLoading(false)
      })
      .catch(e => {
        setError(e)
        setLoading(false)
      })
    window.scrollTo(0, 0)
  }, [id, type])

  return { movieObj, error, loading };
}
