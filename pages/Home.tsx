import React from 'react'

const Characters = ({ name, img , status}: {name: string , img : string , status: string}) => {
  return (
    <div className="bg-gray-200 rounded-md shadow-lg">
      <div>
      <img src={img} alt="" />
      </div>
    <div className='flex justify-center'>{name}</div>
    <div>
      {status.includes('Alive')
        ? <div className='bg-green-200 flex justify-center py-4'>{status}</div>
        : <div className='bg-red-300 py-4 flex justify-center '>{status}</div>
      }
    </div>
  </div>
  )
}

export default Characters