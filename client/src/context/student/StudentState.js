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
  SHUFFLE_STUDENTS,
  // FILTER_STUDENTS,
  // CLEAR_FILTER,
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
        name: 'Adolf',
      },
      {
        id: 3,
        name: 'Ali',
      },
      {
        id: 4,
        name: 'Leo',
      },
      {
        id: 5,
        name: 'Steve',
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(studentReducer, initialState);

  // Add Student
  const addStudent = (student) => {
    student.id = uuid.v4();
    dispatch({ type: ADD_STUDENT, payload: student });
  };

  // Delete Student
  const deleteStudent = (id) => {
    dispatch({ type: DELETE_STUDENT, payload: id });
  };

  // Set Current Student
  const setCurrent = (student) => {
    dispatch({ type: SET_CURRENT, payload: student });
  };

  // Clear Current Student
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Student
  const updateStudent = (students) => {
    dispatch({ type: UPDATE_STUDENT, payload: students });
  };

  // Filter Students

  // Clear Filter

  // Shuffle Students
  const shuffleStudents = (students) => {
    dispatch({ type: SHUFFLE_STUDENTS, payload: students });
  };

  return (
    <StudentContext.Provider
      value={{
        students: state.students,
        current: state.current,
        addStudent,
        deleteStudent,
        setCurrent,
        clearCurrent,
        updateStudent,
        shuffleStudents,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
