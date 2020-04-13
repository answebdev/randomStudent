import React from 'react';
import { Helmet } from 'react-helmet';
import Students from '../students/Students';

const Home = () => {
  return (
    <div className='grid-2'>
      <Helmet>
        <title>Random Student Generator</title>
      </Helmet>
      <div>
        {/* {Student Form} */}
      </div>
      <div>
        <Students />
      </div>
    </div>
  );
};

export default Home;
