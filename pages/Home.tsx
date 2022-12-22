import React from 'react'

const Characters = ({ name, img }: {name: string , img : string}) => {
  return (
    <div className="bg-gray-200 rounded-md shadow-lg">
      <div>
      <img src={img} alt="" />
      </div>
    <div>{name}</div>
  </div>
  )
}

export default Characters