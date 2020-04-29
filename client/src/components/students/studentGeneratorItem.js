import React, { useContext } from 'react';
import { Box } from 'rebass';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import StudentContext from '../../context/student/studentContext';

const StudentGeneratorItem = ({ student }) => {
  const studentContext = useContext(StudentContext);
  const { shuffleStudents, students } = studentContext;

  const { randomName } = students;

  const onShuffle = (randomName) => {
    shuffleStudents();

    randomName = students[Math.floor(Math.random() * students.length)];
    // Redirect to Home page if there are no students on the roster
    if (students.length === 0) {
      swal({
        title: 'No Students',
        text:
          'You currently have no students on your roster. Please click Home and add students to your roster to use the Generator feature.',
        icon: 'warning',
        dangerMode: true,
      });
    } else {
      document.getElementById('main').innerHTML = randomName.name;
      console.log('And the lucky student is ' + randomName.name);
    }
  };

  // Redirect to home page if Generator page is refreshed
  window.onbeforeunload = function () {
    window.setTimeout(function () {
      window.location = '/';
    }, 0);
    window.onbeforeunload = null; // Necessary to prevent infinite loop, that kills your browser
  };

  return (
    <Box
      style={{ border: '#ccc 1px dotted', padding: '75px', margin: '0.7rem 0' }}
      sx={{
        px: 4,
        py: 6,
        borderRadius: 5,
        bg: '#f3f6f8',
      }}
    >
      <h1 className='text-primary text-center lucky'>
        And the lucky student is...
      </h1>
      <p className='text-center lucky animated heartBeat' id='main'>
        <i className='fas fa-question'></i> <i className='fas fa-question'></i>{' '}
        <i className='fas fa-question'></i>
        {randomName}
      </p>
      <br />
      <br />
      <p>
        <button
          className='btn btn-primary btn-lg gen-btn gen-set'
          onClick={onShuffle}
        >
          Next Student
        </button>
      </p>
    </Box>
  );
};

StudentGeneratorItem.propTypes = {
  randomName: PropTypes.string,
};

export default StudentGeneratorItem;
