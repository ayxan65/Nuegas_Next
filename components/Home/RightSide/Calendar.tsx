"use client"
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';

const Calendar = () => {
  const [date, setdate] = useState<Date>()
  return (
    <div className="bg-white h-[50svh] w-[72svw] m-auto lg:m-0 lg:w-[23svw] p-4 rounded-lg lg:h-[44vh] overflow-hidden  shadow-md">
      <DayPicker
      className='overflow-hidden '
      mode='single'
       selected={date}
       onSelect={setdate}
        classNames={{
          day: ' overflow-hidden flex-wrap',
          selected: 'bg-purple text-white font-semibold rounded-full',
          today: 'text-purple font-semibold  ',
          nav_button: 'text-purple  p-1 rounded-full',
          caption: 'text-xl text-center mb-4',
          head_row: 'flex justify-between mb-2',
          head_cell: 'w-10 text-center text-gray-500',
          row: '',
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