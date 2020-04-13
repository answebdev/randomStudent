import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
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
