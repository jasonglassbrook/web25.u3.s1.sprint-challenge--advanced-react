/// external modules ///
import React from 'react';

/// hooks ///
import http from 'hooks/http';

/// components ///
import PlayerCardsDeck from 'components/Player/PlayerCardsDeck';

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
  const [ data, getData ] = http.useGet (props.api, { initData : init.data });

  React.useEffect (() => {
    getData ();
  }, [data]);

  return (
    <div className='AppAsFun'>
      <header>
        <h2>AppAsFun</h2>
      </header>
      <main>
        <PlayerCardsDeck players={data}/>
      </main>
    </div>
  );
};

/**************************************/

export default AppAsFun;
