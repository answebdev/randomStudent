import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StudentContext from '../../context/student/studentContext';

const StudentGeneratorItem = ({ student }) => {
  const studentContext = useContext(StudentContext);
  const { shuffleStudents, students } = studentContext;

  const { randomName } = students;

  const onShuffle = (randomName) => {
    shuffleStudents();
    randomName = students
      .sort(() => Math.random() - Math.random())
      .find(() => true);
    document.getElementById('main').innerHTML = randomName.name;
    console.log('And the lucky student is ' + randomName.name);
  };

  return (
    <div className='generator-card bg-light'>
      <h3 className='text-primary text-left'>And the lucky student is:</h3>
      <p id='main'>{randomName}</p>
      <br />
      <p>
        <button className='btn btn-danger btn-sm' onClick={onShuffle}>
          Shuffle
        </button>
      </p>
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
