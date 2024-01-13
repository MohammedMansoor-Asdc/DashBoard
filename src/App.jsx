import React from 'react'
import Left from './components/Left';
import Middle from './components/Middle';
import Right from './components/Right';

function App() {
  return (
    <>
      <div className='flex ml-[320px] overflow-hidden'>
        <Left />
        <Middle />
        <Right />
      </div>
    </>
  )
}

export default App