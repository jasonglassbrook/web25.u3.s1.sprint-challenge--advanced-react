/// external modules ///
import React from 'react';

/// hooks ///
import { useRemoteGet } from 'hooks/remote';

/// styles ///
import './styles/App.css';

/***************************************
  INIT
***************************************/
const init = {
  api : 'http://localhost:5000/api/players',
};

/***************************************
  COMPONENT
***************************************/
class App extends React.Component {
  /***************************************
    lifecycle
  ***************************************/
  constructor (props) {
    /* DEV */ console.log (`>>> App : constructing... <<<`);
    super (props);
    [this.state.data, this.state.getData] = useRemoteGet (init.api, {fallbackData : []});
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> App : did mount... <<<`);
  };

  componentDidUpdate () {
    /* DEV */ console.log (`>>> App : did update... <<<`);
  };

  componentWillUnmount () {
    /* DEV */ console.log (`>>> App : will unmount... <<<`);
  };

  render () {
    /* DEV */ console.log (`>>> App : rendering... <<<`);
    return (
      <div className='App'>App</div>
    );
  };

  /***************************************
    ...rest
  ***************************************/


  /**************************************/
};

/**************************************/
export default App;
