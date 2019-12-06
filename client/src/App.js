/// external modules ///
import React from 'react';

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
    };
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
