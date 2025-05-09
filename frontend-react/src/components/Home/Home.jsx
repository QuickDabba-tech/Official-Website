import LandingPage from './LandingPage/LandingPage'
import Aboutus from './Aboutus/Aboutus'
import WhyChoose from './WhyChoose/WhyChoose'
import Blog from './Blog/Blog'
import React from 'react'
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>QuickDabba - Taste of Home in Every Bite </title>
        <meta name="description" content="QuickDabba offers healthy, homemade tiffin services for working professionals and students. Get fresh, hygienic meals delivered to your doorstep daily." />
        <link rel="canonical" href="https://www.quickdabba.com" />
      </Helmet>
      <LandingPage />
      <Aboutus />
      <WhyChoose />
      <Blog />
    </>
  )
}

export default Home;
