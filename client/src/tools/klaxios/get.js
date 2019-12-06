/*******************************************************************************
  get - A wrapper for `axios.get`.
*******************************************************************************/

/*//////////////////////////////////////
  imports
//////////////////////////////////////*/
/// external modules ///
import axios from 'axios';

/// tools ///
import $tree from 'tools/$tree';
import { flag as _flag } from 'tools/hi';

/// internal modules ///
import $pack from './$';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
const $this = $tree.branch ('get', $pack);
const flag = (method, message) => {
  _flag (method, `${$this.$fullname} : ${message}`);
};

/***************************************
  MAIN
***************************************/
export const get = (error, setData, fallbackData) => {
};

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
export default get;
