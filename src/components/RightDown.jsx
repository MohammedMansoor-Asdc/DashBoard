import React from 'react'

function RightDown() {
  return (
    <div className='bg-gray-300 h-[580px] pl-[12px] font-Roboto'>
      <div className='mb-4 mt-3'>
        <span className='font-Roboto mr-[250px]'>Recent Sales</span>
        <span className='text-slate-500 cursor-pointer'>See All</span>
      </div>
      <div className='flex flex-col gap-6'>
        <div className='flex gap-20 bg-superGray items-center p2-2 w-[410px] rounded-[20px] h-[80px] rightDown'>
          <div>
            <img className='w-[60px] h-[50px] rounded-[50%]' src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
          </div>
          <div>
            <p>Steven Summer</p>
            <p className='text-slate-400'>02 Minutes Ago</p>
          </div>
          <div>
            <p>+ $52.00</p>
          </div>
        </div>

        <div className='flex gap-20 bg-superGray items-center p2-2 w-[410px] rounded-[20px] h-[80px] rightDown'>
          <div>
            <img className='w-[60px] h-[50px] rounded-[50%]' src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
          </div>
          <div>
            <p>Faizaan</p>
            <p className='text-slate-400'>02 Minutes Ago</p>
          </div>
          <div>
            <p>+ $83.00</p>
          </div>
        </div>

        <div className='flex gap-20 bg-superGray items-center p2-2 w-[410px] rounded-[20px] h-[80px] rightDown'>
          <div>
            <img className='w-[60px] h-[50px] rounded-[50%]' src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
          </div>
          <div>
            <p>Abdul</p>
            <p className='text-slate-400'>05 Minutes Ago</p>
          </div>
          <div>
            <p>+ $61.00</p>
          </div>
        </div>
        <div className='flex gap-20 bg-superGray items-center p2-2 w-[410px] rounded-[20px] h-[80px] rightDown'>
          <div>
            <img className='w-[60px] h-[50px] rounded-[50%]' src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
          </div>
          <div>
            <p>Mohammed</p>
            <p className='text-slate-400'>05 Minutes Ago</p>
          </div>
          <div>
            <p>+ $351.00</p>
          </div>
        </div>

        <div className='flex gap-20 bg-superGray items-center p2-2 w-[410px] rounded-[20px] h-[80px] rightDown'>
          <div>
            <img className='w-[60px] h-[50px] rounded-[50%]' src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
          </div>
          <div>
            <p>Sohail</p>
            <p className='text-slate-400'>10 Minutes Ago</p>
          </div>
          <div>
            <p>+ $152.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightDown