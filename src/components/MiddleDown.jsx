import React from 'react'

function MiddleDown() {
  return (
    <>
      <div className='ml-10 -4'>
        <div className='flex'>
          <div>
            <span className='text-xl font-Roboto'>Last Order</span>
            <div className='ml-[650px] mt-[-22px]'>
              <span className='cursor-pointer p-2 border-2 text-slate-400 border-slate-300 rounded-[10px] mr-6'>Data Updates Every 3 Hours</span>
              <span className='cursor-pointer text-slate-400 ml-[40px]'>view All Orders</span>
            </div>
          </div>
        </div>
        <div>
          <div className='flex items-centre justify-centre gap-[170px] mt-6 w-[1060px] p-[1px] bg-white rounded-[20px]'>
            <img className='w-[50px] rounded-[50%]' src="https://imagevars.gulfnews.com/2023/04/07/Salman-Khan-_1875a92c868_large.jpg" alt="" />
            <span className='mt-[6px]'>David Astee</span>
            <span className='mt-[6px]'>$1,456</span>
            <span className='w-[100px] flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="lightblue"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg><span className='mt-[6px]'>Chargrback</span></span>
            <span className='mt-[6px]'>11Sep2024</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MiddleDown