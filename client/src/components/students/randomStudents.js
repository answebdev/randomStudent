// import React, { Fragment, useContext } from 'react';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import StudentGeneratorItem from './studentGeneratorItem';
// import StudentContext from '../../context/student/studentContext';

// const RandomStudents = () => {
//   const studentContext = useContext(StudentContext);

//   const { students } = studentContext;

//   return (
//     <Fragment>
//       <TransitionGroup>
//         {students.map((student) => (
//           <CSSTransition key={student.id} timeout={500} classNames='item'>
//             <StudentGeneratorItem student={student} />
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     </Fragment>
//   );
// };

// export default RandomStudents;
