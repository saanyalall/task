import React from 'react'
import Navbar from './components/Navbar';
import HomePg from './components/HomePg';
import Section from './components/Section';
import Clients from './Clients';
import Doubts from './components/Doubts';
import Footer from './components/Footer';
import SignIn from "./components/SignIn";





export default function Home(){

  return (
   <>
   <Navbar/>
   <HomePg/>
   <Section/>
   <Clients/>
   <Doubts/>
   <Footer/>
 
    </>
  )
}
