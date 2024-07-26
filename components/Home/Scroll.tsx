import React from 'react'
import DashBoard from './DashBoard'
import Right from './RightSide/Right'

const Scroll = () => {
  return (
    <div className='flex h-screen overflow-y-auto overflow-x-hidden'>
        <DashBoard/>
        <Right/>
    </div>
  )
}

export default Scroll