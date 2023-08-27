import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';

export default function Clients() {
    return (
        <div style={{backgroundColor:"rgb(24 29 29)", color:"white",height:"27rem"}}>
            <h1 style={{padding:"4rem", textAlign:"center"}}>what are clients says about us</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width:"19rem",
                        height: "12rem",
                        marginLeft:"5rem",
                        backgroundColor:"#a6a6d1",
                        textAlign:"justify",
                        fontSize: "17px"
                    },
                }}
            >
                <Paper elevation={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit rerum dolor aliquam modi illum cupiditate voluptates quibusdam. 
                Non aut praesentium aperiam enim, cum itaque vel corporis eos ad nemo soluta culpa pariatur voluptate quasi.
                <Avatar alt="Remy Sharp" src="/avatar/1.jpg" sx={{color:"black"}} />
                <p style={{marginLeft: "3rem",marginTop: "-1rem",fontStyle: "oblique",fontSize: "17px"}}>Founder, Remy Sharp</p>
                </Paper>
                <Paper elevation={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit rerum dolor aliquam modi illum cupiditate voluptates quibusdam. 
                Non aut praesentium aperiam enim, cum itaque vel corporis eos ad nemo soluta culpa pariatur voluptate quasi.
                <Avatar alt="Jed Watson" src="/avatar/1.jpg" sx={{color:"black"}} />
                <p style={{marginLeft: "3rem",marginTop: "-1rem",fontStyle: "oblique",fontSize: "17px"}}>Manager, Jed Watson</p>
                </Paper>

                <Paper elevation={3}>Lorem ipsum dolor sit amet consectetur adipisicing elit.Sit rerum dolor aliquam modi illum cupiditate voluptates quibusdam. 
                Non aut praesentium aperiam enim, cum itaque vel corporis eos ad nemo soluta culpa pariatur voluptate quasi.
                <Avatar alt="Tim Neutkens" src="/avatar/1.jpg" sx={{color:"black"}} />
                <p style={{marginLeft: "3rem",marginTop: "-1rem",fontStyle: "oblique",fontSize: "17px"}}>HR,Director Tim Neutkens</p>
                </Paper>
            </Box>
        </div>
    )
}
