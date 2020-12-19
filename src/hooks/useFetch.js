import { useState, useEffect, useRef } from "react";

export const useFetch = (query) => {
  const url = "https://countries-274616.ew.r.appspot.com/";
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: query }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        } else {
          console.log("setSate no se llamo");
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: "No se pudo cargar la info",
        });
      });
  }, [url, query]);

  return state;
};
