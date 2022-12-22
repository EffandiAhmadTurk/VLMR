import React from 'react'

const Characters = ({ name, img }: {name: string , img : string}) => {
  return (
    <div className="character-card">
    <img src={img} alt="" />
    <div>{name}</div>
  </div>
  )
}

export default Characters