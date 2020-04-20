import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StudentContext from '../../context/student/studentContext';

const StudentItem = ({ student }) => {
  const studentContext = useContext(StudentContext);
  const { deleteStudent, setCurrent, clearCurrent } = studentContext;

  const { id, name } = student;

  const onDelete = () => {
    deleteStudent(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left' id='student-name'>
        {name}{' '}
        <span className='student-btns'>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(student)}
          >
            Edit
          </button>
          <button className='btn btn-danger btn-sm' onClick={onDelete}>
            Delete
          </button>
        </span>
      </h3>
      {/* <button
        className='btn btn-dark btn-sm'
        onClick={() => setCurrent(student)}
      >
        Edit
      </button>
      <button className='btn btn-danger btn-sm' onClick={onDelete}>
        Delete
      </button> */}
      <br />
      <p>
        {/* <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(student)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button> */}
      </p>
    </div>
  );
};

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};

export default StudentItem;
