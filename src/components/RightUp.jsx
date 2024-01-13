import React from 'react'
import ExamplePieFunctionComponent from './PieChart'

function RightUp() {
  return (
    <div className='bg-white pt-[22px] w-[500px] h-[350px]'>
      <div className='ml-[22px]'>
        <p className='font-Roboto text-[20px]'>Monthly Profits</p>
        <p className='text-slate-300'>Total Profits Grow of 26%</p>
        <div className='flex'>
          <ExamplePieFunctionComponent />
          <div className='flex flex-col gap-2 ml-[-22px]'>
            <p className='text-slate-400'>Give away</p>
            <p className='font-Roboto text-[18px] '>60%
            <div className='flex'>
              <div className='w-[60px] h-[4px] bg-lightPurple'></div>
              <div className='w-[40px] h-[4px] bg-superGray'></div>
              </div></p>
            <p className='text-slate-400'>Affilate</p>
            <p className='font-Roboto text-[18px]'>24%
            <div className='flex'>
              <div className='w-[24px] h-[4px] bg-lightOrange '></div>
              <div className='w-[76px] h-[4px] bg-superGray '></div>
              </div></p>
            <p className='text-slate-400'>Offline Sales</p>
            <p className='font-Roboto text-[18px]'>16%
            <div className='flex'>
              <div className='w-[16px] h-[4px] bg-slate-500'></div>
              <div className='w-[84px] h-[4px] bg-superGray '></div>
              </div></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightUp