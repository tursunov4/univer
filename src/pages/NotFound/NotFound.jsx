import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate} from "react-router-dom"



export default function NotFound() {
    const naviagte = useNavigate()
  return (
    <Box
      sx={{
        margin:"0",
        padding:"0",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: "rgb(111, 211, 222)",
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button onClick={()=>naviagte("/")} variant="contained">Back Home</Button>
    </Box>
  );
}