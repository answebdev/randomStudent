import React, { useReducer } from 'react';
import axios from 'axios';
import StudentContext from './studentContext';
import studentReducer from './studentReducer';
import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_STUDENT,
  SHUFFLE_STUDENTS,
  CLEAR_STUDENTS,
  STUDENT_ERROR,
  // FILTER_STUDENTS,
  // CLEAR_FILTER,
} from '../types';

const StudentState = (props) => {
  const initialState = {
    students: null,
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(studentReducer, initialState);

  // Get Students
  const getStudents = async () => {
    try {
      const res = await axios.get('/api/students');

      dispatch({ type: GET_STUDENTS, payload: res.data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.msg });
    }
  };

  // Add Student
  const addStudent = async (student) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/students', student, config);

      dispatch({ type: ADD_STUDENT, payload: res.data });
    } catch (err) {
      dispatch({ type: STUDENT_ERROR, payload: err.response.msg });
    }
  };

  // Delete Student
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);

      dispatch({
        type: DELETE_STUDENT,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: STUDENT_ERROR,
        payload: err.response.msg,
      });
    }
  };

  // Clear Students
  const clearStudents = () => {
    dispatch({ type: CLEAR_STUDENTS });
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
        error: state.error,
        getStudents,
        addStudent,
        deleteStudent,
        setCurrent,
        clearCurrent,
        updateStudent,
        shuffleStudents,
        clearStudents,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
