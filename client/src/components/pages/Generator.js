import React from 'react';
import { Helmet } from 'react-helmet';
// import RandomStudents from '../students/randomStudents';
import StudentGeneratorItem from '../students/studentGeneratorItem';

const Generator = () => {
  return (
    <div className='grid-1'>
      <Helmet>
        <title>Lucky Student | Generator</title>
      </Helmet>
      <h1>
        <span className='text-primary'>Generator</span>
        {/* <span className='text-primary'>About This App</span> */}
      </h1>
      <div>
        <StudentGeneratorItem />
      </div>
    </div>
  );
};

export default Generator;
