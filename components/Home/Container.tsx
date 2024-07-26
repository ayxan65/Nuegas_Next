import React from 'react'
import Menu from './Menu'
import DashBoard from './DashBoard'
import Calendar from './RightSide/Calendar'



const Container = () => {
  return (
    <div className='bg-gray overflow-y-hidden' >
      <div className='  m-auto flex pt-[1.5em] overflow-hidden   '>

      <Menu/>
      <DashBoard/>
      <Calendar/>
      
      

      </div>
        
    </div>
  )
}

export default Container