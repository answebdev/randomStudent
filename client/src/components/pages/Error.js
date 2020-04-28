import React from 'react';
import { Helmet } from 'react-helmet';
import student from '../layout/error-girl.png';

const Error = () => {
  return (
    <div className='error'>
      <Helmet>
        <title>Lucky Student | Error</title>
        <style type='text/css'>{`
        body {
            background-color: #f5d4ae;
        }
    `}</style>
      </Helmet>

      <div className='centered-error'>
        <h1 className='text-center pnf'>404 Page Not Found</h1>
        <h1 className='text-center'>
          <span>
            <img id='error-girl' src={student} alt='Lucky Student Logo' />
          </span>
        </h1>

        <p className='text-center'>
          <a class='btn btn-primary error-btn' href='/'>
            <i className='fa fa-home'></i> Take Me Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Error;
