import React from 'react'
import Menu from './Menu'
import DashBoard from './DashBoard'
import Calendar from './RightSide/Calendar'
import Task from './Task'
import Right from './RightSide/Right'
import Scroll from './Scroll'



const Container = () => {
  return (
    <div className='bg-gray overflow-y-hidden' >
      <div className='  m-auto flex pt-[1.5em] overflow-y-hidden    '>

      <Menu/>
      <Scroll/>
      
    
      

      </div>
        
    </div>
  )
}

export default Container