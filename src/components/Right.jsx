import React from 'react'
import RightUp from './RightUp';
import RightDown from './RightDown';

function Right() {
  return (
    <>
      <div className='flex flex-col'>
        <RightUp />
        <RightDown />
      </div>
    </>

  )
}

export default Right