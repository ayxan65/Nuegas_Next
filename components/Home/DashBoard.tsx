import React from 'react'
import NavBar from './NavBar'
import Task from './Task'
import Mentors from '../Mentors'

const DashBoard = () => {
  return (
    <div className='block px-4 '>
    <NavBar/>
    <Task/>
    <Mentors/>
    </div>
  )
}

export default DashBoard