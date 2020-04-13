import React from 'react';

const Error = () => {
  return (
    <div>
      <h1 className='text-center'>404 Page Not Found</h1>
      <h1 className='text-center'>
        <span>
          <i class='far fa-surprise fa-spin'></i>
        </span>
      </h1>
      <br />
      <p className='text-center'>
        <a
          class='btn btn-primary error-btn'
          href='/'
          style={
            {
              // fontFamily: 'Roboto',
              // fontWeight: '400',
              // letterSpacing: '0.5',
              // backgroundColor: '#3D6CAD',
              // border: '#ffffff',
            }
          }
        >
          <i className='fa fa-home'></i> Take Me Home
        </a>
      </p>
    </div>
  );
};

export default Error;
