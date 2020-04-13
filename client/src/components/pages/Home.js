import React from 'react';
import { Helmet } from 'react-helmet';
import Students from '../students/Students';
import StudentForm from '../students/StudentForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <Helmet>
        <title>Random Student Generator</title>
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
