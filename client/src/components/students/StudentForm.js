import React, { useState } from 'react';

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
  });

  const { name } = student;

  const onChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  return (
    <form>
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
