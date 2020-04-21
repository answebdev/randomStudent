import {
  ADD_STUDENT,
  DELETE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_STUDENT,
  // SHUFFLE_STUDENTS,
  // FILTER_STUDENTS,
  // CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
      };
    // case SHUFFLE_STUDENTS:
    //   return {
    //     ...state,
    //     student: state.students
    //       .sort(() => Math.random() - Math.random())
    //       .find(() => true),
    //   };
    // case SHUFFLE_STUDENTS:
    //   const students = [...state.students];
    //   for (let idx = students.length - 1; idx > 0; idx--) {
    //     const randIdx = Math.floor(Math.random() * (idx + 1));
    //     const student = students[randIdx];
    //     students[randIdx] = student[idx];
    //     students[idx] = student;
    //   }
    //   return { ...state, students };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
