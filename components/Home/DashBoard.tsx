import React from 'react'
import NavBar from './NavBar'
import Task from './Task'
import Mentors from '../Mentors'
import UpcomingTask from '../UpcomingTask'

const DashBoard = () => {
  return (
    <div className='block px-4 '>
    <NavBar/>
    <Task/>
    <Mentors/>
    <UpcomingTask/>
    
    </div>
  )
}

export default DashBoard