/*******************************************************************************
  AppAsClass
--------------------------------------------------------------------------------
  Implementation of App as a class component to demonstrate ability to write class components.
*******************************************************************************/

/// external modules ///
import React from 'react';

/// tools ///
import klaxios from 'tools/klaxios';

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
class AppAsClass extends React.Component {
  /***************************************
    lifecycle
  ***************************************/
  constructor (props) {
    /* DEV */ console.log (`>>> AppAsClass : constructing... <<<`);
    super (props);
    
    this.state = {
      'data' : init.data,
    };
  };

  componentDidMount () {
    /* DEV */ console.log (`>>> AppAsClass : did mount... <<<`);

    // use my `klaxios` module for HTTP GET request 
    klaxios.get (
      this.props.api,
      {
        handleData : (newData) => { this.setState ({ data : newData }); },
        initData : init.data,
      }
    );
  };

  componentDidUpdate () {
    /* DEV */ console.log (`>>> AppAsClass : did update... <<<`);
  };

  componentWillUnmount () {
    /* DEV */ console.log (`>>> AppAsClass : will unmount... <<<`);
  };

  render () {
    /* DEV */ console.log (`>>> AppAsClass : rendering... <<<`);

    return (
      <div className='AppAsClass'>
        <header>
          <h2>AppAsClass</h2>
        </header>
        <main>
          <PlayerCardsDeck players={this.state.data}/>
        </main>
      </div>
    );
  };

  /***************************************
    ...rest
  ***************************************/


  /**************************************/
};

/**************************************/

export default AppAsClass;
