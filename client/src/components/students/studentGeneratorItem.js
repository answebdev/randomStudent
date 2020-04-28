import React, { useContext } from 'react';
import { Box } from 'rebass';
import PropTypes from 'prop-types';
import StudentContext from '../../context/student/studentContext';

const StudentGeneratorItem = ({ student }) => {
  const studentContext = useContext(StudentContext);
  const { shuffleStudents, students } = studentContext;

  const { randomName } = students;

  const onShuffle = (randomName) => {
    shuffleStudents();
    // randomName = students
    //   .sort(() => Math.random() - Math.random())
    //   .find(() => true);
    randomName = students[Math.floor(Math.random() * students.length)];
    document.getElementById('main').innerHTML = randomName.name;
    console.log('And the lucky student is ' + randomName.name);
  };

  return (
    <Box
      style={{ border: '#ccc 1px dotted', padding: '75px', margin: '0.7rem 0' }}
      sx={{
        px: 4,
        py: 6,
        // backgroundSize: 'cover',
        borderRadius: 5,
        // color: '#8e4cc6',
        bg: '#f3f6f8',
      }}
    >
      <h1 className='text-primary text-center lucky'>
        And the lucky student is...
      </h1>
      <p className='text-center lucky' id='main'>
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

    // <div className='grid-1'>
    //   {/* <h1 style={{ textAlign: 'center' }}>
    //     <span className='text-primary'>Generator</span>
    //   </h1> */}
    //   <div className='generator-card bg-light'>
    //     <h3 className='text-primary text-left' id='head'>
    //       And the lucky student is...
    //     </h3>
    //     <p id='main'>
    //       <i className='far fa-question-circle fa-lg'></i>
    //       {randomName}
    //     </p>
    //     <br />
    //     <p>
    //       <button
    //         className='btn btn-primary error-btn btn-sm'
    //         onClick={onShuffle}
    //       >
    //         Next Student
    //       </button>
    //     </p>
    //   </div>
    // </div>
  );
};

// StudentGeneratorItem.propTypes = {
//   students: PropTypes.object.isRequired,
// };

StudentGeneratorItem.propTypes = {
  randomName: PropTypes.string,
};

export default StudentGeneratorItem;
