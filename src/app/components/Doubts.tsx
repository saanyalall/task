import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function Doubts() {
  return (
    <div style={{backgroundColor:"#222727",color:"white", textAlign:"center"}}>
        <h2 style={{padding:"4rem", textAlign:"center"}}>Lets clear your doubts!</h2>
        <Box sx={{ width: '50%',height:"15rem", fontSize:"25px",margin:"auto"}}>
      <Stack spacing={2}>
        <Paper elevation={3}>What is the approval criteria to be a Mentor?
        <Fab size="small"  aria-label="add" sx={{marginLeft:"3rem"}}><AddIcon /></Fab>
        </Paper>
        <Paper elevation={3}>How does Mentor Bridge work for Mentors?
        <Fab size="small"  aria-label="add" sx={{marginLeft:"4rem"}}><AddIcon /></Fab>
        </Paper>
        <Paper elevation={3}>Can I charge fees of my choice?
        <Fab size="small" aria-label="add" sx={{marginLeft:"12rem"}}><AddIcon /></Fab>
        </Paper>
        <Paper elevation={3}>Can I get guidance on how to be a mentor?
        <Fab size="small"  aria-label="add" sx={{marginLeft:"4rem"}}><AddIcon /></Fab>
        </Paper>
      </Stack>
    </Box>
    </div>
  )
}
