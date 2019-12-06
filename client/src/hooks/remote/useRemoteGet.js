/*******************************************************************************
  useRemoteGet
*******************************************************************************/

/*//////////////////////////////////////
  imports
//////////////////////////////////////*/
/// external modules ///
import React from 'react';
import axios from 'axios';

/// tools ///
import $tree from 'tools/$tree';
import { flag as _flag } from 'tools/hi';
import { is } from 'tools/iffy';
import {
  handleAxiosResponse,
  handleAxiosError,
} from 'tools/klaxios';

/// internal modules ///
import $pack from './$';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
const $this = $tree.branch ('useRemoteGet', $pack);
const flag = (method, message) => {
  _flag (method, `${$this.$fullname} : ${message}`);
};

/***************************************
  INIT
***************************************/
const init = {
  'options' : {
    'fallbackData' : {},
    'handleResponse' : handleAxiosResponse,
    'handleError' : handleAxiosError,
  },
};

/***************************************
  MAIN
***************************************/
export const useRemoteGet = (address, options) => {
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

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
export default useRemoteGet;
