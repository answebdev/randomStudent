import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Lucky Student | About</title>
      </Helmet>
      <h1>
        <span className='text-primary'>About Lucky Student</span>
      </h1>
      <p className='my-1'>
        Lucky Student is a tool that can be used in the classroom and that
        allows teachers to select a student at random from their class roster.
        There are various ways for teachers to elicit responses from students in
        the classroom, such as calling on particular students by name, eliciting
        a response from the class as a whole, etc. Lucky Student can change
        things up in the classroom by leaving it up to chance. Project it on the
        screen for the students to see. They will be left wondering if they are
        the next lucky student to be chosen!
      </p>
      <p className='my-1'>
        <strong>Directions: </strong> To use Lucky Student, simply click on
        Generator in the navigation bar. You need to be logged in to be able to
        use this feature. Register to create an account and log in to add or
        delete students to your roster. Once logged in, you may also edit the
        names of your students after you have added them, or delete them. To use
        the Generator feature and randomly select a student from your roster,
        just click on the Next Student button once you navigate to the Generator
        page.
      </p>
      <p className='my-1'>
        &copy; 2020 Lucky Student | Lucky Student was created and developed
        by&nbsp;
        <a
          className='outside-links'
          href='https://adolfschmuck.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          Adolf Schmuck
        </a>
        .
      </p>
      <p className='my-1'>
        Also by Adolf Schmuck:&nbsp;
        <a
          className='outside-links'
          href='https://esl-toolbox.com/'
          rel='noopener noreferrer'
          target='_blank'
        >
          ESL Toolbox
        </a>
        &nbsp;(a resource hub for students and teachers of ESL).
      </p>
      <p className='bg-dark p' id='about'>
        <strong className='about-bar'>Version 1.0.0</strong>
      </p>
      <br />
      <br />
    </div>
  );
};

export default About;
