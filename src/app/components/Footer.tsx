'use client';
import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <div style={{backgroundColor:"rgb(24 29 29)", color:"white",padding:"5rem"}}>
    <Box sx={{margin:"auto",marginRight:"3rem",display: "flex",gap:"27px"}}>
        <LinkedInIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <FacebookIcon/>
        </Box> 
        
    
    <Box  sx={{ color: 'white', display: 'flex', flexDirection: 'column',marginLeft:"47rem",marginTop:"-1rem",gap:"2rem",textDecorationLine:"underline" }}>
     <Typography>Contacts</Typography>
        <Typography>Privacy Policy</Typography>
        <Typography>Terms Of Use</Typography>
    </Box>

    <Typography sx={{fontSize:"18px"}}>2023 Mentor Bridge. All Right Reserved.</Typography>

    <Box  sx={{ color: 'white', display: 'flex', flexDirection: 'column',marginLeft:"61rem",marginTop:"-10rem",gap:"2rem" }}>
     <Typography>Help Center</Typography>
        <Typography>About Us</Typography>
        <Typography>FAQ</Typography>
    </Box>

      
    </div>
  )
}










