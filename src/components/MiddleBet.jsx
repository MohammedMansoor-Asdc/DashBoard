import React from 'react'
import ExampleBarFunctionComponent from './Bar';

function MiddleBet() {
  return (
    <div className='ml-4 p-4'>
      <div>
        <p className='font-Roboto text-[18px]'>Users in The Last Week</p>
        <div className='flex gap-[780px] mb-2'>
          <p className='font-Roboto text-[26px]'>+3,2%</p>
          <p className='text-slate-400 cursor-pointer'>See statistics for all Time</p>
        </div>
      </div>
      <div>
        <ExampleBarFunctionComponent />
      </div>
    </div>
  )
}

export default MiddleBet