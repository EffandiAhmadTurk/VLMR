import React from 'react'

const Profile = () => {
  return (
    <div className='bg-gray-200 h-screen flex justify-center items-center'>
        <div className='bg-gray-100 py-32 px-32 rounded-md shadow-2xl'>
        <div className="bg-gray-400 cursor-pointer my-2 rounded-md shadow-lg">
      <a href='/'>
      <div className='flex justify-center '>
      <img className='rounded-[100%] shadow-2xl h-[300px] w-[300px]'  alt="" />
      </div>
    <div className='flex justify-center bg-white py-2 shadow-2xl mt-1'>John</div>
<div className='bg-green-200'>
    Alive
</div>
      </a>
  </div>
        </div>
    </div>
  )
}

export default Profile