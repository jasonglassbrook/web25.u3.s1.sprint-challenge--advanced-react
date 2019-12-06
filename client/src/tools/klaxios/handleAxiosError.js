/*******************************************************************************
  handleAxiosError
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
import parseError from './parseAxiosError';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
const $this = $tree.branch ('handleAxiosError', $pack);
const flag = (method, message) => {
  _flag (method, `${$this.$fullname} : ${message}`);
};

/***************************************
  MAIN
***************************************/
export const handleAxiosError = (error, setData, fallbackData) => {
  let data = fallbackData;

  try {
    const message = parseError(error);
    flag ('log', 'Here\'s what happened.');
    console.log (message);
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
export default handleAxiosError;
