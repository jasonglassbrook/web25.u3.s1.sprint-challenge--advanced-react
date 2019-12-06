/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
// import _flag from 'tools/flag';
import handleAxiosResponse from './handleAxiosResponse';
import handleAxiosError from './handleAxiosError';
import { is } from 'tools/iffy';

/**************************************/

// const flag = (method, message) => {
//   _flag (method, `useRemoteData : ${message}`);
// };

/***************************************
  STATES
***************************************/
const init = {
  'options' : {
    'fallbackData' : {},
    'handleResponse' : handleAxiosResponse,
    'handleError' : handleAxiosError,
  },
};

/***************************************
  HOOK
***************************************/
const useRemoteData = (address, options) => {
  // apply default options
  if (is (options)) {
    options = {...init.options, ...options};
  } else {
    options = init.options;
  }

  const [data, setData] = React.useState (options.fallbackData);

  const getData = () => {
    axios
      .get (address)
      .then ((response) => {
        options.handleResponse (response, setData, options.fallbackData);
      })
      .catch ((error) => {
        options.handleError (error, setData, data); // doesn't overwrite data
      });
  };

  return [data, getData];
};

/**************************************/
export default useRemoteData;
export {
  useRemoteData,
};
