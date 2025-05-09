import Whoweare from './Whoweare/Whoweare'
import OurMission from './OurMission/OurMission'
import OurVision from './OurVision/OurVision'
import React from 'react'
import { Helmet } from "react-helmet";

const Aboutus = () => {
  return (
    <>
      <Helmet>
        <title>About QuickDabba - QuickDabba </title>
        <meta name="description" content="Learn more about QuickDabba, your trusted homemade tiffin service. We provide healthy, hygienic, and delicious meals delivered to your doorstep, bringing the taste of home to busy professionals and students." />
      </Helmet>
      <Whoweare />
      <OurMission />
      <OurVision /> 
    </>
  )
}

export default Aboutus
