import React from 'react'
import Menu from './Menu'
import DashBoard from './NavBar'

const Container = () => {
  return (
    <div className='bg-grey h-[100vh]' >
      <div className='  m-auto flex pt-[1.5em]  '>

      <Menu/>
      <DashBoard/>
      </div>
        
    </div>
  )
}

export default Container