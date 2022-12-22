import React from 'react'

const Characters = ({ name, img , status}: {name: string , img : string , status: string}) => {
  return (
    <div className="bg-gray-400 my-2 rounded-md shadow-lg">
      <div className='flex justify-center '>
      <img className='rounded-[100%] shadow-2xl h-[300px] w-[300px]' src={img} alt="" />
      </div>
    <div className='flex justify-center bg-white py-2 shadow-2xl mt-1'>{name}</div>
    <div>
      {status.includes('Alive')
        ? <div className='bg-green-200 flex justify-center py-4'>{status}</div>
        : <div className='bg-red-300 shadow-2xl py-4 flex justify-center '>{status}</div>
      }
    </div>
  </div>
  )
}

export default Characters