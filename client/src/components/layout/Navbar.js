import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import StudentContext from '../../context/student/studentContext';
import logo from '../layout/ls-logo.png';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const studentContext = useContext(StudentContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearStudents } = studentContext;

  const onLogout = () => {
    logout();
    clearStudents();
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='/'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm hide-md'> Logout</span>
        </a>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/generator'>Generator</Link>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <p className='nav-title'>
        <img id='app-logo' src={logo} alt='Lucky Student Logo' /> {title}
      </p>
      <ul>
        {isAuthenticated ? authLinks : guestLinks}
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Lucky Student',
};

export default Navbar;
