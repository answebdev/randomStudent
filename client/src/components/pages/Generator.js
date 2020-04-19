import React from 'react';
import { Helmet } from 'react-helmet';
// import RandomStudents from '../students/randomStudents';
import StudentGeneratorItem from '../students/studentGeneratorItem';

const Generator = () => {
  return (
    <div className='grid-2'>
      <Helmet>
        <title>Random Student Generator | Generator</title>
      </Helmet>
      <div>
        <StudentGeneratorItem />
      </div>
      <div>{/* <RandomStudents /> */}</div>
    </div>
  );
};

export default Generator;
