import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StudentContext from '../../context/student/studentContext';

const StudentItem = ({ student }) => {
  const studentContext = useContext(StudentContext);
  const { deleteStudent } = studentContext;

  const { id, name } = student;

  const onDelete = () => {
    deleteStudent(id);
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{name}</h3>
      <br />
      <p>
        <button className='btn btn-dark btn-sm'>Edit</button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};

export default StudentItem;
