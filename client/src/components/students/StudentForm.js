import React, { useState, useContext } from 'react';
import StudentContext from '../../context/student/studentContext';

const StudentForm = () => {
  const studentContext = useContext(StudentContext);

  const [student, setStudent] = useState({
    name: '',
  });

  const { name } = student;

  const onChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    studentContext.addStudent(student);
    setStudent({
      name: '',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Add Student</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          value='Add Student'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

export default StudentForm;
