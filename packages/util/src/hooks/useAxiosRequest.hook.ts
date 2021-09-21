import { useEffect, useRef, useReducer, useState } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

type ReturnType = {
  dataFetched: any;
  error: any;
  loading: boolean;
  exec(): void;
};

type StateType = {
  dataFetched: any;
  loading: boolean;
  error: any;
};

type ActionType =
  | { type: 'FETCHING' }
  | { type: 'FETCHED'; payload: any }
  | { type: 'FETCH_ERROR'; payload: any };

const initialState: StateType = {
  dataFetched: null,
  error: null,
  loading: false,
};

function useAxiosRequest(
  url: string,
  config: AxiosRequestConfig,
  auto = false
): ReturnType {
  const cancelRequest = useRef(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [apiConfig, setApiConfig] = useState(config);
  const [execCount, setExecCount] = useState(auto ? 1 : 0);

  function reducer(reducerState: StateType, action: ActionType): StateType {
    switch (action.type) {
      case 'FETCHING':
        return {
          ...initialState,
          loading: true,
        };
      case 'FETCHED':
        return {
          ...initialState,
          dataFetched: action.payload,
        };
      case 'FETCH_ERROR':
        return {
          ...initialState,
          error: action.payload,
        };
      default:
        return reducerState;
    }
  }

  useEffect(() => {
    const { log } = console;
    cancelRequest.current = false;

    async function fetchData(): Promise<void> {
      dispatch({ type: 'FETCHING' });

      try {
        const response = await axios.request({ url, ...apiConfig });
        if (cancelRequest.current) return;
        dispatch({ type: 'FETCHED', payload: response.data });
      } catch (err) {
        if (cancelRequest.current) return;
        dispatch({ type: 'FETCH_ERROR', payload: err });
      }
    }

    if (execCount) {
      fetchData();
    }

    return function cleanup() {
      cancelRequest.current = true;
    };
  }, [url, apiConfig, execCount]);

  const exec = (): void => {
    setExecCount(execCount + 1);
  };

  return {
    dataFetched: state.dataFetched,
    error: state.error,
    loading: state.loading,
    exec,
  };
}

const useAxiosGet = (
  url: string,
  auto = true,
  config: AxiosRequestConfig = {}
): ReturnType => {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    method: 'GET',
  };

  return useAxiosRequest(url, requestConfig, auto);
};

const useAxiosPost = (
  url: string,
  config: AxiosRequestConfig = {}
): ReturnType => {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    method: 'POST',
  };

  return useAxiosRequest(url, requestConfig);
};

const useAxiosPut = (
  url: string,
  config: AxiosRequestConfig = {}
): ReturnType => {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    method: 'PUT',
  };

  return useAxiosRequest(url, requestConfig);
};

const useAxiosPatch = (
  url: string,
  config: AxiosRequestConfig = {}
): ReturnType => {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    method: 'PATCH',
  };

  return useAxiosRequest(url, requestConfig);
};

const useAxiosDelete = (
  url: string,
  config: AxiosRequestConfig = {}
): ReturnType => {
  const requestConfig: AxiosRequestConfig = {
    ...config,
    method: 'PATCH',
  };

  return useAxiosRequest(url, requestConfig);
};

export {
  useAxiosGet,
  useAxiosPost,
  useAxiosPut,
  useAxiosPatch,
  useAxiosDelete,
};
