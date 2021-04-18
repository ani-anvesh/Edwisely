import { useReducer, useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  /* const [status, setStatus] = useState("");
  const [data, setData] = useState([]); */
  const cache = useRef({});

  const initialState = {
    status: "idle",
    statusCode: null,
    message: null,
    data: {},
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" };
      case "FETCHED":
        return {
          ...initialState,
          status: "FETCHED",
          statusCode: action.payload.status,
          data: action.payload.student_profile,
          message: action.payload.message,
        };
      case "FETCH_ERROR":
        return {
          ...initialState,
          status: "ERROR",
          statusCode: action.payload.status,
          message: action.payload.message,
        };
      default:
        return state;
    }
  }, initialState);
  useEffect(() => {
    let cancelRequest = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozNDc1OSwicm9sbF9udW1iZXIiOiJBMjI0IiwiYWN0aXZlX3N0YXR1cyI6MSwiaW5pIjoiMTYxNzY2OTAyMCIsImV4cCI6IjE2MTg5NjUwMjAifQ.p0-sMbAsGqMHCwoclBhae21bwAGjQnTNGAtIyJLaebE",
              // 'Content-Type': 'application/json'
            },
          });
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();
    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);
  return state;
};
