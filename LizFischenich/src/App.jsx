import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav.jsx';
import Heading from './Components/Heading.jsx';
import { useMediaQuery } from '@mui/material';

function App() {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <>
      <Heading />
      {/* Render Outlet */}
      <Outlet />
      {/* Render Nav below Outlet on small screens */}
      {isSmallScreen && <Nav />}
    </>
  );
}
export default App;
