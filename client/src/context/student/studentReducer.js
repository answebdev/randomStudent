import {
  GET_STUDENTS,
  ADD_STUDENT,
  DELETE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_STUDENT,
  STUDENT_ERROR,
  CLEAR_STUDENTS,
  // SHUFFLE_STUDENTS,
  // FILTER_STUDENTS,
  // CLEAR_FILTER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload,
        loading: false,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [action.payload, ...state.students],
        loading: false,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id ? action.payload : student
        ),
        loading: false,
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
          (student) => student._id !== action.payload
        ),
        loading: false,
      };
    case CLEAR_STUDENTS:
      return {
        ...state,
        students: null,
        error: null,
        current: null,
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
    case STUDENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
