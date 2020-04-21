import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Random Student Generator | About</title>
      </Helmet>
      {/* <h1 className='text-primary'>About This App</h1> */}
      <h1>
        <span className='text-primary'>About This App</span>
      </h1>
      <p className='my-1'>
        This is a full-stack React app used to randomly generate student names
        from a class roster.
      </p>
      <p className='bg-dark p'>
        <strong className='about-bar'>Version 1.0.0</strong>
      </p>
    </div>
  );
};

export default About;
