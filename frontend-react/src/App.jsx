import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';
import './App.css';
import Contactus from './components/Contactus/Contactus';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Homechef from './components/Homechef/Homechef';
import Delivery from './components/Delivery/Delivery';
import Howtoorder from './components/Howtoorder/Howtoorder';
import AppLayout from './components/AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, 
    children: [
      { path: '/', element: <Home /> },
      { path: '/contactus', element: <Contactus /> },
      { path: '/aboutus', element: <Aboutus /> },
      { path: '/chef', element: <Homechef /> },
      { path: '/delivery', element: <Delivery /> },
      { path: '/order', element: <Howtoorder /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;