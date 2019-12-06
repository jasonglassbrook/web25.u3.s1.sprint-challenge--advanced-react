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
export default {
  get,
  handleResponse,
  handleError,
  parseResponse,
  parseError,
};

export * from './get';
export * from './handleAxiosResponse';
export * from './handleAxiosError';
export * from './parseAxiosResponse';
export * from './parseAxiosError';
