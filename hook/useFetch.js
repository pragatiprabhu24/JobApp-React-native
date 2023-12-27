import React from "react";
import { useState, useEffect } from "react";


const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
        "X-RapidAPI-Key": 'bd1ec16a05msh29330374374591ap11d866jsne3360ba98180',
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    params: { ...query },
   
  };

  const fetchData = async () => {
    setIsLoading;
    try {
      const response = await axios.request(options);
      console.log(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const reFetchData = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, reFetchData };
};

export default useFetch;
