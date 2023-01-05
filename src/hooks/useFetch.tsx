import { useState } from 'react';
import { BASE_URL } from '../utils';

export const useFetch = () => {
  const [fetchObj, setFetchObj] = useState({
    loading: false,
    data: null
  });

  const fetchData = async (endpoint: string) => {
    setFetchObj({
      ...fetchObj,
      loading: true
    });
    try {
      await fetch(`${BASE_URL}${endpoint}`).then(res => {
        return res.json();
      }).then(result => {
        setFetchObj({
          ...fetchObj,
          loading: false,
          data: result
        });
        console.log('result', result);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    fetchData,
    fetchObj
  };
};
