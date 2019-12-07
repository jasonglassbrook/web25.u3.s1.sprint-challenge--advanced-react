/*******************************************************************************
  useRemoteGet
*******************************************************************************/

/*//////////////////////////////////////
  imports
//////////////////////////////////////*/
/// external modules ///
import React from 'react';

/// tools ///
// import $tree from 'tools/$tree';
// import { flag as _flag } from 'tools/hi';
import klaxios from 'tools/klaxios';

/// internal modules ///
// import $pack from './$';

/*//////////////////////////////////////
  meta
//////////////////////////////////////*/
// const $this = $tree.branch ('useRemoteGet', $pack);
// const flag = (method, message) => {
//   _flag (method, `${$this.$fullname} : ${message}`);
// };

/***************************************
  MAIN
***************************************/
export const useRemoteGet = (address, options) => {
  const [data, setData] = React.useState (options.fallbackData);

  const getData = () => {
    klaxios.get (address, setData, options);
  };

  return [data, getData];
};

/*//////////////////////////////////////
  exports
//////////////////////////////////////*/
export default useRemoteGet;
