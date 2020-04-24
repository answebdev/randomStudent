import React, { useContext } from 'react';
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
    <div className='gen'>
      {/* <h1 style={{ textAlign: 'center' }}>
        <span className='text-primary'>Generator</span>
      </h1> */}
      <div className='generator-card bg-light'>
        <h3 className='text-primary text-left' id='head'>
          And the lucky student is...
        </h3>
        <p id='main'>
          <i class='far fa-question-circle fa-lg'></i>
          {randomName}
        </p>
        <br />
        <p>
          <button
            className='btn btn-primary error-btn btn-sm'
            onClick={onShuffle}
          >
            Next Student
          </button>
        </p>
      </div>
    </div>
  );
};

// StudentGeneratorItem.propTypes = {
//   students: PropTypes.object.isRequired,
// };

StudentGeneratorItem.propTypes = {
  randomName: PropTypes.string,
};

export default StudentGeneratorItem;
