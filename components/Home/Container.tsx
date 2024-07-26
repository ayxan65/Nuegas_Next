import React from 'react'
import Menu from './Menu'
import DashBoard from './DashBoard'



const Container = () => {
  return (
    <div className='bg-gray' >
      <div className='  m-auto flex pt-[1.5em] overflow-hidden   '>

      <Menu/>
      <DashBoard/>
      

      </div>
        
    </div>
  )
}

export default Container