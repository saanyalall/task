'use client';
import Button from '@mui/material/Button';
import { AppBar, Typography, Toolbar,Tabs,Tab} from "@mui/material";
import { useRouter } from 'next/navigation';


export default function Navbar() {
  const router = useRouter();
  const handleLogin=()=>{
    router.push("/SignIn");
  }

  return (
    <>
    <AppBar sx={{backgroundColor:"antiquewhite", position:"fixed",margin:"auto"}}>
    <Toolbar>
    <Typography color={'black'}>Mentor Bridge</Typography>
    

    
    <Tabs>
        <Tab sx={{color:"black"}} label= "About us"/>
        <Tab sx={{color:"black"}} label= "Blog"/>
        <Button variant="outlined" sx={{color:"black"}} >Earning Calculator</Button>
    </Tabs>
    <Button variant="contained" sx={{marginLeft:"auto", color:"black"}} onClick={handleLogin} >Sign In</Button>
<Button variant="contained" sx={{marginLeft:'10px', color:"black"}}>Sign-up</Button>
</Toolbar>
</AppBar>
</>

  )
}