/*******************************************************************************
  handleAxiosResponse
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
import parseResponse from './parseAxiosResponse';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
const $this = $tree.branch ('handleAxiosResponse', $pack);
const flag = (method, message) => {
  _flag (method, `${$this.$fullname} : ${message}`);
};

/***************************************
  MAIN
***************************************/
export const handleAxiosResponse = (response, setData, fallbackData) => {
  let data = fallbackData;

  try {
    data = parseResponse (response);
  }
  catch (error) {
    flag ('error', 'An error occured.');
    console.error (error);
  }

  if (is (setData)) {
    setData (data);
  }
};

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
export default handleAxiosResponse;
