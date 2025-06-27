import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
      <div className='w-10 h-10 rounded-full border-3 animate-spin border-t-transparent border-zinc-600 scale-150'></div>
    </div>
  )
}

export default Loading
