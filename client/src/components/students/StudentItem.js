import React from 'react';
import PropTypes from 'prop-types';

const StudentItem = ({ student }) => {
  const { id, name } = student;

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{name}</h3>
    </div>
  );
};

StudentItem.propTypes = {
  student: PropTypes.object.isRequired,
};

export default StudentItem;
