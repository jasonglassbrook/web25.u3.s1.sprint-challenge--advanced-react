/// external modules ///
import React from 'react';

/// tools ///
import klaxios from 'tools/klaxios';

/// components ///
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppAsClass from 'AppAsClass';
import AppAsFun from 'AppAsFun';

/// styles ///
import './styles/App.css';

/***************************************
  INIT
***************************************/
const init = {
  api : 'http://localhost:5000/api/players',
};

const App = (props) => (
  <div className='App'>
    <header>
      <h1>sprint-challenge--advanced-react</h1>
    </header>
    <main>
      <Router>
        <Route path='/as-class'>
          <AppAsClass api={init.api}/>
        </Route>
        <Route path='/as-fun'>
          <AppAsFun api={init.api}/>
        </Route>
      </Router>
    </main>
  </div>
);

/**************************************/
export default App;
