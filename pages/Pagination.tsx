import React from 'react'

const Pagination = ({ nextPage, prevPage, goToPage, pages } : {nextPage: any , prevPage : any , goToPage: any , pages : any}) => {
    let pageButtons = []
    for (let i = 1; i <= pages; i++) {
    pageButtons.push(<button key={i} onClick={() => goToPage(i)}>{i}</button>)
  }
  return ( 
    <div className='max-w-[900px] space-x-2 bg-indigo-200 mx-auto'>
      {prevPage && (<button className='bg-white rounded-md shadow-lg' onClick={prevPage}>Previous</button>)}
      {pageButtons}
      {nextPage && (<button className='bg-white rounded-md shadow-lg' onClick={nextPage}>Next</button>)}
    </div>
  )
}

export default Pagination