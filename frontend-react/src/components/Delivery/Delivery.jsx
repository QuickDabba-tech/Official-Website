import React from 'react'
import Dform from './Dform/Dform'
import Dinfo from './Dinfo/Dinfo'
import { Helmet } from 'react-helmet';

const Delivery = () => {
  return (
    <>
    <Helmet>
        <title>Join as a Delivery Partner - QuickDabba</title>
        <meta
          name="description"
          content="Become a delivery partner with QuickDabba and help us deliver fresh homemade meals to our customers. Fill out the form to apply!"
        />
      </Helmet>
      <Dform />
      <Dinfo />
    </>
  )
}

export default Delivery
