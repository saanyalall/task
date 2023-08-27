'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {Box,Drawer,AppBar,Toolbar,Tabs,Tab,Button,Typography,Divider} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import Person2Icon from '@mui/icons-material/Person2';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

export default function SignIn() {
  const icons=[
    {icon:<HomeIcon/>,text:"Home"},
    {icon:<CallIcon/>,text:"Bookings"},
    {icon:<InsertCommentIcon/>,text:"Queries"}
  ]

  const iconss=[
    {icon:<ManageAccountsIcon/>,text:"Services"},
    {icon:<CalendarMonthIcon/>,text:"Schedule"},
    
  ]

  const iconsss=[
    {icon:<Person2Icon/>,text:"Profile"},
    {icon:<CardGiftcardIcon/>,text:"Rewards"},
    {icon:<LogoutIcon/>,text:"Logout"}
  ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <Typography color={'black'}>Mentor Bridge</Typography>
        <Tabs>
        <Tab sx={{color:"black"}} label= "About us"/>
        <Tab sx={{color:"black"}} label= "Blog"/>
        <Button variant="outlined" sx={{color:"black"}} >Earning Calculator</Button>
    </Tabs>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems:'flex-start' }}>
      {icons.map((item, index) => (
        <Box key={index} sx={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
          {item.icon}
          <span style={{ marginLeft: '0.5rem' }}>{item.text}</span>
        </Box>
      ))}
    </div>
    <Divider/>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {iconss.map((item, index) => (
        <Box key={index} sx={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
          {item.icon}
          <span style={{ marginLeft: '0.5rem' }}>{item.text}</span>
        </Box>
      ))}
    </div>
    <Divider/>

    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {iconsss.map((item, index) => (
        <Box key={index} sx={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start' }}>
          {item.icon}
          <span style={{ marginLeft: '0.5rem' }}>{item.text}</span>
        </Box>
      ))}
    </div>

      </Drawer>
   
    </Box>
  );
}



