import React from 'react';

const Home = ({ isHomeTab }) => {
  return (
    <div>
      {isHomeTab && (
        <div>
          {/* Content for the index page */}
        </div>
      )}
    </div>
  );
};

export default Home;
