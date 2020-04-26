import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import StudentItem from './StudentItem';
import Spinner from '../layout/Spinner';
import StudentContext from '../../context/student/studentContext';

const Students = () => {
  const studentContext = useContext(StudentContext);

  const { students, getStudents, loading } = studentContext;

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);

  if (students !== null && students.length === 0 && !loading) {
    return <h4>Please add a student</h4>;
  }

  return (
    <Fragment>
      {students !== null && !loading ? (
        <TransitionGroup>
          {students.map((student) => (
            <CSSTransition key={student._id} timeout={500} classNames='item'>
              <StudentItem student={student} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Students;
