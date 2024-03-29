import React from 'react'

const Pagination = ({ nextPage, prevPage, goToPage, pages } : {nextPage: any , prevPage : any , goToPage: any , pages : any}) => {
    let pageButtons = []
    for (let i = 1; i <= pages; i++) {
    pageButtons.push(<button className='bg-wheat rounded-md shadow-lg w-6' key={i} onClick={() => goToPage(i)}>{i}</button>)
  }
  return ( 
    <div className='max-w-[900px] border-4 border-black  gap-3 flex flex-wrap py-2 rounded-md shadow-2xl bg-gray-200 mx-auto'>
      {prevPage && (<button className='bg-white px-2 py-1 rounded-md shadow-lg' onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button className='bg-white px-2 py-1 rounded-md shadow-lg' onClick={nextPage}>Next</button>)}
    </div>
  )
}

export default Pagination