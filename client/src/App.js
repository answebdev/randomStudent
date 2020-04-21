import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Error from './components/pages/Error';
import Generator from './components/pages/Generator';
import StudentState from './context/student/StudentState';
import AuthState from './context/auth/AuthState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <StudentState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/generator' component={Generator} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route component={Error} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </StudentState>
    </AuthState>
  );
};

export default App;
