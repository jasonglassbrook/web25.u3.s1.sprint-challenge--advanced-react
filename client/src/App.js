/// external modules ///
import React from 'react';

/// tools ///
import klaxios from 'tools/klaxios';

/// components ///
import PlayerCardsDeck from 'components/Player/PlayerCardsDeck';

/// styles ///
import './styles/App.css';

/***************************************
  INIT
***************************************/
const init = {
  api : 'http://localhost:5000/api/players',
  data : [],
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
    this.state = {
      'data' : init.data,
    };
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> App : did mount... <<<`);
    klaxios.get (
      init.api,
      (newData) => { this.setState ({ data : newData }); }
    )
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
      <div className='App'>
        <PlayerCardsDeck players={this.state.data}/>
      </div>
    );
  };

  /***************************************
    ...rest
  ***************************************/


  /**************************************/
};

/**************************************/
export default App;
