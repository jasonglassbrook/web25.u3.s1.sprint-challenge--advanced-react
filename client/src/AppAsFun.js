/*******************************************************************************
  AppAsFun
--------------------------------------------------------------------------------
  Implementation of App as a function component to demonstrate use of a custom hook, which CANNOT be used in a class component.
*******************************************************************************/

/// external modules ///
import React from 'react';

/// hooks ///
import http from 'hooks/http';

/// components ///
import Player from 'components/Player';

/***************************************
  INIT
***************************************/
const init = {
  data : [],
};

/***************************************
  COMPONENT
***************************************/
const AppAsFun = (props) => {
  // use my custom hook for HTTP GET requests
  const [ data, getData ] = http.useGet (props.api, { initData : init.data });

  // trigger GET
  React.useEffect (() => {
    if (data.length === 0) {
      getData ();
    };
  }, [data]);

  //
  return (
    <div className='AppAsFun'>
      <header>
        <h2>AppAsFun</h2>
      </header>
      <main>
        <Player.CardsDeck players={data}/>
      </main>
    </div>
  );
};

/**************************************/

export default AppAsFun;
