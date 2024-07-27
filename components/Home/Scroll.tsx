import React from 'react'
import DashBoard from './DashBoard'
import Right from './RightSide/Right'

const Scroll = () => {
  return (
    <div className='h-screen overflow-y-auto lg:flex lg:h-screen lg:overflow-y-auto lg:overflow-x-hidden'>
        <DashBoard/>
        <Right/>
    </div>
  )
}

export default Scroll