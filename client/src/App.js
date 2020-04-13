import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Error from './components/pages/Error';
import StudentState from './context/student/StudentState';
import './App.css';

const App = () => {
  return (
    <StudentState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route component={Error} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </StudentState>
  );
};

export default App;
