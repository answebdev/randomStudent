import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Students from '../students/Students';
import StudentForm from '../students/StudentForm';
import AuthContext from '../../context/auth/authContext';
// import AuthState from '../../context/auth/AuthState';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='grid-2'>
      <Helmet>
        <title>Lucky Student</title>
      </Helmet>
      <div>
        <StudentForm />
      </div>
      <div>
        <Students />
      </div>
    </div>
  );
};

export default Home;
