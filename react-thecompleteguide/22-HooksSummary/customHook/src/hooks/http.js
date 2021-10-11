/* This custom hook storage the actions to fetch, add or remove an ingredient from a data base */
import { useReducer, useCallback } from 'react';

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true, //the state of the data (loading true or false)
        error: null, //error status
        data: null, //data to send (ingredient data)
        extra: null, //The extra data to send, eg id
        identifier: action.identifier //the action identifier
      };
    case 'RESPONSE':
      return {
        ...curHttpState,
        loading: false,
        data: action.responseData,
        extra: action.extra
      };
    case 'ERROR': //sets an error
      return { loading: false, error: action.errorMessage };
    case 'CLEAR': //Clear all and returns the initial state
      return initialState; //reset to the initial state
    default:
      throw new Error('Should not be reached!');
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const clear = useCallback( () => dispatchHttp({ type: 'CLEAR' }), [] );

  const sendRequest = useCallback( //useCallback to prevent re-renders
    (url, method, body, reqExtra, reqIdentifer) => {
      dispatchHttp({ type: 'SEND', identifier: reqIdentifer });
      fetch(url, {
        method: method,
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          return response.json();
        })
        .then(responseData => {
          dispatchHttp({
            type: 'RESPONSE',
            responseData: responseData,
            extra: reqExtra
          });
        })
        .catch(error => {
          dispatchHttp({
            type: 'ERROR',
            errorMessage: 'Something went wrong!'
          });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest, //Returns the handler function
    reqExtra: httpState.extra,
    reqIdentifer: httpState.identifier,
    clear: clear
  };
};

export default useHttp;
