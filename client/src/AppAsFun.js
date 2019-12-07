/// external modules ///
import React from 'react';

/// hooks ///
import useRemoteGet from 'hooks/remote';

/// components ///
import PlayerCardsDeck from 'components/Player/PlayerCardsDeck';

/***************************************
  COMPONENT
***************************************/
const AppAsFun = (props) => {
  const [ data, getData ] = useRemoteGet (props.api);

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
