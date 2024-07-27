import React from 'react';

const taskData = [
  { id: 1, text: 'Understanding the tools in Figma' },
  { id: 2, text: 'Understand the basics of making designs' },
  { id: 3, text: 'Design a mobile application with Figma' }
];

const Detail = () => {
  return (
    <div className='bg-white w-[89svw] lg:m-0 m-auto lg:w-[23vw] p-4'>
      <div className='flex justify-between'>
        <div className='font-semibold'>Detail Task</div>
        <div className='text-text'>UI/UX desing</div>
      </div>
      <div>
        {taskData.map((task) => (
          <div key={task.id} className={`flex items-center gap-3 ${task.id % 2 !== 0 ? 'py-5' : ''}`}>
            <div className='h-[3em] w-[3em] rounded-md bg-grey flex items-center justify-center font-bold'>{task.id}</div>
            <div>{task.text}</div>
          </div>
        ))}
      </div>
      <button className='rounded-lg mx-auto my-7 h-10 w-[20em] bg-purple text-white flex items-center justify-center'>Go To Detail</button>
    </div>
  );
}

export default Detail;
