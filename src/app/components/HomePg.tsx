'use client';
import React from 'react'
import { Box,Typography,Button} from '@mui/material';


export default function HomePg() {
  return (
    <div style={{backgroundColor:"rgb(24 29 29)",textAlign:"center",height:"40rem",color:"white"}}>
   <img src="/hddw_fve5_220303.jpg" alt="img"  style={{ height:"39rem", width:"15rem", marginLeft:"55rem",paddingBottom:"8rem",paddingTop:"10rem"}}/>
   <Box sx={{marginRight:"25rem",
    position: "relative",
    top: "-27rem"}}>
   
      <Typography sx={{fontSize:"4rem"}}>Grow Fast Together</Typography>
      <Typography sx={{fontSize:"2rem",marginLeft:"2rem"}}>Find a mentor or Lead the path for someone
        It's a win win!
      </Typography>
     <Button variant="contained" sx={{color:"black", margin: "4rem",fontSize: "20px"}}>Find a mentor</Button>
     <Button variant="contained" sx={{color:"black",fontSize: "20px"}}>Become a mentor</Button>
     
     </Box>
     </div>


  )
}