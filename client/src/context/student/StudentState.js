import React, { useReducer } from 'react';
// import uuid from 'uuid';
import * as uuid from 'uuid';
import StudentContext from './studentContext';
import studentReducer from './studentReducer';
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_STUDENT,
  FILTER_STUDENTS,
  CLEAR_FILTER,
} from '../types';

const StudentState = (props) => {
  const initialState = {
    students: [
      {
        id: 1,
        name: 'Rumi',
      },
      {
        id: 2,
        name: 'Ali',
      },
      {
        id: 1,
        name: 'Leo',
      },
    ],
  };

  const [state, dispatch] = useReducer(studentReducer, initialState);

  // Add Student
  const addStudent = (student) => {
    student.id = uuid.v4();
    dispatch({ type: ADD_STUDENT, payload: student });
  };

  // Delete Student

  // Set Current Student

  // Clear Current Student

  // Update Student

  // Filter Students

  // Clear Filter

  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        addStudent,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
