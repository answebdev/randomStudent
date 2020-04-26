import React from 'react';
import { Helmet } from 'react-helmet';

const Error = () => {
  return (
    <div>
      <Helmet>
        <title>Lucky Student | Error</title>
      </Helmet>
      <div className='error-div'>
        <h1 className='text-center'>404 Page Not Found</h1>
        <h1 className='text-center'>
          <span>
            <i class='far fa-surprise fa-spin'></i>
          </span>
        </h1>
        <br />
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
