/*******************************************************************************
  klaxios
--------------------------------------------------------------------------------
  A wrapper for `axios` with various helper functions.
  It provides more feedback in the console.
  The name is a portmanteau of "klaxon" (a loud electric horn) and "axios".
*******************************************************************************/

/*//////////////////////////////////////
  imports
//////////////////////////////////////*/
import get from './get';
import handleResponse from './handleAxiosResponse';
import handleError    from './handleAxiosError';
import parseResponse  from './parseAxiosResponse';
import parseError     from './parseAxiosError';

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
/// qualified names ///
export default {
  get,
  handleResponse,
  handleError,
  parseResponse,
  parseError,
};

/// full names ///
export { default as get } from './get';
export { default as handleAxiosResponse } from './handleAxiosResponse';
export { default as handleAxiosError    } from './handleAxiosError';
export { default as parseAxiosResponse  } from './parseAxiosResponse';
export { default as parseAxiosError     } from './parseAxiosError';
