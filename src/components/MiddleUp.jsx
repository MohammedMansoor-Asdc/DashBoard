import React from 'react'
import ExampleFunctionComponentTwo from './ExampleTwo';
import ExampleFunctionComponent from './Example';

function MiddleUp() {
  return (
    <>
      <div className='w-[1050px] h-[300px] mt-2 ml-4 p-4 font-Roboto'>
        <div className='flex gap-[50%]'>
          <div className='cursor-pointer'>
            <p className='text-xl'>Dashboard</p>
            <p className='text-slate-400 text-[12px]'>Payments Updates</p>
          </div>
          <div>
            <input type="text" placeholder='&#128269;&nbsp;Search' className='rounded-[20px] w-[400px] h-[45px] p-2 pl-4' />
          </div>
        </div>
        <div className='flex gap-6 mt-10'>
          <div className='w-[350px] h-[180px] bg-lightGreen rounded-[40px]'>
            <div className='flex justify-center items-center mt-4'>
              <p><span className='p-[4px] mr-6 bg-DarkGreen text-lightGreen rounded-[5px]'>$</span> Balance</p>
              <div className='ml-4 p-[4px] rounded-[10px] bg-DarkGreen'>
                <p className='text-[12px] text-white'>+17%</p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='text-4xl pl-20 mt-4'>$ 56,874</p>
            </div>
            <div className='flex justify-center items-center mt-[-22px] pl-4'>
              <ExampleFunctionComponent />
            </div>
          </div>
          <div className='w-[350px] h-[180px] bg-lightOrange rounded-[40px]'>
            <div className='flex justify-center items-center mt-4'>
              <p><span className='p-[2px] mr-6 bg-DarkOrange text-lightOrange rounded-[5px]'>%</span> Sales</p>
              <div className='ml-4 p-[4px] rounded-[10px] bg-DarkOrange'>
                <p className='text-[12px] text-white'>+23%</p>
              </div>
            </div>
            <div className='flex items-center'>
              <p className='text-4xl pl-24 mt-4'>$ 24,575</p>
            </div>
            <div className='flex justify-center items-center mt-[-22px] pl-4'>
              <ExampleFunctionComponentTwo />
            </div>
          </div>
          <div className='w-[350px] border flex justify-center items-center bg-lightBlue rounded-[40px]'>
            <div className='text-center text-white'>
              <p className='text-center'>Upgrade</p>
              <p className='text-slate-100'>Get more information <br />and opportunities</p>
              <button className='p-2 mt-2 rounded-[20px] bg-DarkBlue'>Get Pro</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiddleUp