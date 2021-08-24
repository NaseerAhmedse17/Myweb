import React from 'react'
import { NavLink } from 'react-router-dom'
import image1 from '../images/image1.jpg'
import Common from './Common'

function Home() {
  return (
    <React.Fragment>
      <Common name='Grow your Business with Our '
        imgsrc={image1}
        visit="/Service"
        btname="Get Started" />
    </React.Fragment>
  )
}

export default Home
