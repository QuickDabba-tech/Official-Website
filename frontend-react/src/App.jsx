import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';
import './App.css';
import Contactus from './components/Contactus/Contactus';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Homechef from './components/Homechef/Homechef';
import Delivery from './components/Delivery/Delivery';
import Howtoorder from './components/Howtoorder/Howtoorder';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/><Footer /></>
    },
    {
      path:"/contactus",
      element: <><Navbar/><Contactus/><Footer /></>
    },
    {
      path:"/aboutus",
      element: <><Navbar/><Aboutus/><Footer /></>
    },
    {
      path:"/chef",
      element: <><Navbar/><Homechef/><Footer /></>
    },
    {
      path:"/delivery",
      element: <><Navbar/><Delivery/><Footer /></>
    },
    {
      path:"/order",
      element: <><Navbar/><Howtoorder/><Footer /></>
    }
  ])

  return (
    <>
    <RouterProvider router = {router} /> 
    </>
  )
}
export default App;
