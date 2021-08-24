import React from 'react'
import Common from './Common'
import image1 from '../images/image1.jpg'

function About() {
  return (
    <div>
      <Common name='Welcome to This About page '
        imgsrc={image1}
        visit="/Contact"
        btname="Contact Now" />
    </div>
  )
}

export default About
