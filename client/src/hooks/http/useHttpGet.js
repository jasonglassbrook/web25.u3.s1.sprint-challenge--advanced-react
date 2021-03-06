/*******************************************************************************
  useHttpGet
--------------------------------------------------------------------------------
  React hook for performing HTTP GET request via `klaxios` (a wrapper for `axios`).
*******************************************************************************/

/// external modules ///
import React from 'react';

/// tools ///
import { is , isnt } from 'tools/iffy';
import klaxios from 'tools/klaxios';

/***************************************
  MAIN
***************************************/
export const useHttpGet = (url, options) => {
  // require options
  if (isnt (options)) {
    options = {};
  };

  // use state
  const [data, setData] = React.useState (
    is (options.initData) ? options.initData : {}
  );
  
  // append setData to options.handleData
  if (is (options.handleData)) {
    options.handleData = (...args) => {
      options.handleData (...args);
      setData (...args);
    };
  }
  else {
    options.handleData = setData;
  };

  // define getter
  const getData = () => {
    klaxios.get (url, options);
  };

  //
  return [data, getData];
};

/**************************************/

export default useHttpGet;
