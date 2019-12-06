/// external modules ///
import React from 'react';
import axios from 'axios';

/// internal modules ///
import _flag from 'tools/flag';
import handleAxiosResponse from './handleAxiosResponse';
import handleAxiosError from './handleAxiosError';
// import iffy from 'tools/iffy';

/**************************************/

const flag = (method, message) => {
  _flag (method, `useRemoteData : ${message}`);
};

/***************************************
  STATES
***************************************/
const init = {
  'data' : {},
  'handleResponse' : handleAxiosResponse,
  'handleError' : handleAxiosError,
}

/***************************************
  HOOK
***************************************/
export const useRemoteData = (
  address,
  {
    handleResponse = init.handleResponse,
    handleError = init.handleError,
    initData = init.data
  }
) => {
  const [data, setData] = React.useState (initData);

  const fetchData = (value) => {
    
  };

  return [data, fetchData];
};

/**************************************/
export default useSessionStorageState;
