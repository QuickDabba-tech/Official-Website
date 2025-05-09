import React from 'react'
import Form from './Form/Form'
import Info from './Info/Info'
import { Helmet } from 'react-helmet';

const Homechef = () => {
  return (
    <>
     <Helmet>
        <title>Join as a Home Chef - QuickDabba</title>
        <meta
          name="description"
          content="Are you passionate about cooking homemade meals? Join QuickDabba as a Home Chef and share your delicious recipes with customers. Fill out the form to apply!"
        />
      </Helmet>
        <Info />
        <Form />
    </>
  )
}

export default Homechef;
