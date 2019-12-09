/// external modules ///
import React from 'react';

/// components ///
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';
import AppAsClass from './AppAsClass';
import AppAsFun from './AppAsFun';
import FlexRow from 'components/basics/flex/FlexRow';

/// styles ///
import './styles/App.css';

/***************************************
  INIT
***************************************/
const init = {
  api : 'http://localhost:5000/api/players',
};

const App = (props) => (
  <Router>
    <div className='App'>
      <header>
        <h1>sprint-challenge--advanced-react</h1>
        <nav>
          <NavLink to='/as-class'>View As Class Component</NavLink>
          <NavLink to='/as-fun'>View As Function Component</NavLink>
        </nav>
      </header>
      <main>
          <Route path='/as-class'>
            <AppAsClass api={init.api}/>
          </Route>
          <Route path='/as-fun'>
            <AppAsFun api={init.api}/>
          </Route>
      </main>
    </div>
  </Router>
);

/**************************************/

export default App;
