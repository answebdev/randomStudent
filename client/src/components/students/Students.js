import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StudentItem from './StudentItem';
import StudentContext from '../../context/student/studentContext';

const Students = () => {
  const studentContext = useContext(StudentContext);

  const { students } = studentContext;

  return (
    <Fragment>
      <TransitionGroup>
        {students.map((student) => (
          <CSSTransition key={student.id} timeout={500} classNames='item'>
            <StudentItem student={student} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Students;
