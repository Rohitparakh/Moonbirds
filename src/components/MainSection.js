import React from 'react'
import Connect from './Connect'
import Slideshow from './Slideshow'

const MainSection = () => {
  return (
    <>
        <div className='main'>
            <Slideshow/>
            <Connect/>
        </div>
    </>
  )
}

export default MainSection