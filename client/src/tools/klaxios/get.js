/*******************************************************************************
  get - A wrapper for `axios.get`.
*******************************************************************************/

/// external modules ///
import axios from 'axios';

/// tools ///
// import $tree from 'tools/$tree';
// import { flag as _flag } from 'tools/hi';
import { is } from 'tools/iffy';

/// internal modules ///
// import $trunk from './$';
import handleAxiosResponse from './handleAxiosResponse';
import handleAxiosError from './handleAxiosError';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
// const $this = $tree.branch ('get', $trunk);
// const flag = (method, message) => {
//   _flag (method, `${$this.$fullname} : ${message}`);
// };

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
export const get = (address, setData, options) => {
  /// apply defaults ///
  if (is (options)) {
    options = {...init.options, ...options};
  } else {
    options = init.options;
  }

  /// do it ///
  axios
    .get (address)
    .then ((response) => {
      options.handleResponse (response, setData, options.fallbackData);
    })
    .catch ((error) => {
      options.handleError (error, setData, options.fallbackData);
    });
};

/**************************************/

export default get;
