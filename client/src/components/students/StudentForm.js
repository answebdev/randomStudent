import React, { useState, useContext, useEffect } from 'react';
import StudentContext from '../../context/student/studentContext';

const StudentForm = () => {
  const studentContext = useContext(StudentContext);

  const { addStudent, updateStudent, clearCurrent, current } = studentContext;

  useEffect(() => {
    if (current !== null) {
      setStudent(current);
    } else {
      setStudent({
        name: '',
      });
    }
  }, [studentContext, current]);

  const [student, setStudent] = useState({
    name: '',
  });

  const { name } = student;

  const onChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addStudent(student);
    } else {
      updateStudent(student);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Student' : 'Add Student'}
      </h2>
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
          value={current ? 'Update Student' : 'Add Student'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default StudentForm;
