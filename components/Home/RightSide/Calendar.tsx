"use client"
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';

const Calendar = () => {
  const [date, setdate] = useState<Date>()
  return (
    <div className="bg-white p-4 rounded-lg  shadow-md">
      <DayPicker
      className='overflow-hidden '
      mode='single'
       selected={date}
       onSelect={setdate}
        classNames={{
          day: 'w-[20vw] flex h-10 flex  overflow-hidden items-center justify-center rounded-full',
          selected: 'bg-purple text-white',
          today: 'text-black font-bold bg-purple w-[3vw] h-[3vw] rounded-full',
          nav_button: 'text-purple  p-1 rounded-full',
          caption: 'text-xl text-center mb-4',
          head_row: 'flex justify-between mb-2',
          head_cell: 'w-10 text-center text-gray-500',
          row: 'flex justify-between',
          cell: 'w-10 h-10 flex items-center justify-center',
          
        }}
        styles={{
          caption: { display: 'flex', justifyContent: 'center', marginBottom: '1rem' },
          nav: { display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' },
        }}
      />
    </div>
  );
};

export default Calendar;