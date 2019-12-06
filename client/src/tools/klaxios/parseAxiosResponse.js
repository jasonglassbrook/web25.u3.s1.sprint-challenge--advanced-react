/*******************************************************************************
  parseAxiosResponse
--------------------------------------------------------------------------------
  Deal with axios response data.
*******************************************************************************/

/*//////////////////////////////////////
  imports
//////////////////////////////////////*/
/// tools ///
import $tree from 'tools/$tree';
import { flag as _flag } from 'tools/hi';
import { is } from 'tools/iffy';

/// internal modules ///
import $pack from './$';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
const $this = $tree.branch ('parseAxiosResponse', $pack);
const flag = (method, message) => {
  _flag (method, `${$this.$fullname} : ${message}`);
};

/***************************************
  MAIN
***************************************/
export const parseAxiosResponse = (axiosResponse) => {
  let message = {};

  if (is (axiosResponse)) {
    flag ('log', 'The server responded.');
    console.log ('- data:', axiosResponse.data);
    console.log ('- status:', axiosResponse.status);
    console.log ('- headers:', axiosResponse.headers);
    console.log ('- config:', axiosResponse.config);

    message = axiosResponse.response.data;
  }
  else {
    // There was no error to parse.
    flag ('warn', 'There was no response to parse.');
  }

  return (message);
};

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
export default parseAxiosResponse;
