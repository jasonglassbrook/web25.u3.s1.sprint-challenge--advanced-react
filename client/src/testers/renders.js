/// external modules ///
import React from 'react';
import { render } from '@testing-library/react';

/// tools ///
import { is } from 'tools/iffy';

/***************************************
  TEST
***************************************/
export const renders = (name, Component, props) => {
  test (`${name} renders without crashing`, () => {
    const thing = render (<Component {...(is (props) ? props : {})}/>);
    
    thing.unmount ();
  });
};

/**************************************/

export default renders;
