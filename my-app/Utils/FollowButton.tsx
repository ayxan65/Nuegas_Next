"use client"
import React from 'react'
import { useState } from 'react'

const FollowButton = () => {
    const [Followed, setFollowed] = useState(false);

  const  toggleFollow = () => {
         setFollowed(!Followed); 
    }

  return (
    <div>
    {Followed ? (
      <button onClick={toggleFollow}>Unfollow</button>
    ) : (
      <button className='text-red' onClick={toggleFollow}>+Follow</button>
    )}
  </div>
  )
}

export default FollowButton