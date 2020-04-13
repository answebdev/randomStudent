import React, { Fragment, useContext } from 'react';
import StudentItem from './StudentItem';
import StudentContext from '../../context/student/studentContext';

const Students = () => {
  const studentContext = useContext(StudentContext);

  const { students } = studentContext;

  return (
    <Fragment>
      {students.map((student) => (
        <StudentItem student={student} />
      ))}
    </Fragment>
  );
};

export default Students;
