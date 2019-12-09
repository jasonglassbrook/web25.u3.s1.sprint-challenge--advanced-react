/*******************************************************************************
  request
--------------------------------------------------------------------------------
  A wrapper for `axios[<request-name>]`.
  It has less customizability than `axios`, but handles most basic cases.
*******************************************************************************/

/// external modules ///
import axios from 'axios';

/// tools ///
import { is } from 'tools/iffy';

/// internal modules ///
import _options from './_options';

/***************************************
  MAIN
***************************************/
export const request = (name, url, options) => {
  // handle user options
  options = _options.parse (options);

  // make the request
  axios
    [name] (...(is (options.config) ? [url, options.config] : [url]))
    .then ((response) => {
      options.handleResponse (response, setData, options.initData);
    })
    .catch ((error) => {
      options.handleError (error, setData, options.initData);
    });
};

/**************************************/

export default request;
