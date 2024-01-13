import React from 'react'
import MiddleUp from './MiddleUp';
import MiddleBet from './MiddleBet';
import MiddleDown from './MiddleDown';

function Middle() {
  return (
    <>
      <div className='flex flex-col'>
        <MiddleUp />
        <MiddleBet />
        <MiddleDown />
      </div>
    </>
  )
}

export default Middle