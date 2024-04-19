import React from "react";
import { Box, Container, Typography } from "@mui/material";



const Heading = ({ style }) => {
  return (
    <Box
      sx={{
        
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 300, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // Set text color for contrast
        textAlign: 'left', // Left justify text
        ...style, // Apply inline styles
      }}
    >
      <Container sx={{ width: '66%', color: 'orange' }}>
        <Typography variant="h1" style={{ fontFamily:'Amatic SC', fontWeight: 'Bold', fontSize: '8rem'}}>Liz Fischenich</Typography>
      </Container>
    </Box>
  );
};

export default Heading;
