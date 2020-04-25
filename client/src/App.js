import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';

import Error from './components/pages/Error';
import Generator from './components/pages/Generator';
import StudentState from './context/student/StudentState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <StudentState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/generator' component={Generator} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route component={Error} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </StudentState>
    </AuthState>
  );
};

export default App;
