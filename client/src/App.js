/// external modules ///
import React from 'react';

/// hooks ///
import { useRemoteData } from 'hooks/remote';

/// styles ///
import './styles/App.css';

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
    this.state = {
      api : 'http://localhost:5000/api/players',
    };
    [this.state.data, this.state.getData] = useRemoteData (this.state.api, {fallbackData : []});
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
