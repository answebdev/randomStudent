import React from 'react';
import { Helmet } from 'react-helmet';
import StudentGeneratorItem from '../students/studentGeneratorItem';

const Generator = () => {
  return (
    <div className='grid-1'>
      <Helmet>
        <title>Lucky Student | Generator</title>
      </Helmet>
      <h1>
        <span className='text-primary'>Generator</span>
      </h1>
      <p className='my-1'>
        Click the <strong>Next Student</strong> button to select a student at
        random.
      </p>
      <div>
        <StudentGeneratorItem />
        <br />
      </div>
    </div>
  );
};

export default Generator;
