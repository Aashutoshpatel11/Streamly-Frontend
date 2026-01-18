import React from 'react'

function Loading() {
  return (
    <div className='w-full flex justify-center items-center' >
        <div className='rounded-full w-4 h-4 border-t border-b border-r border-white  animate-spin' ></div>
    </div>
  )
}

export default Loading