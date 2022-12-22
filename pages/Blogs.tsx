import React, { useEffect, useState } from 'react'
import Home from '.';
import Characters from './Home';
import Pagination from './Pagination';
interface IDatePickerProps {
  applicationMode?: boolean;
  value: string;
  setValue: (value: string) => void;} 
const Blogs = () => {
  const [loading, setLoading] = useState<any>(true)
const [characters, setCharacters] = useState<[]>([])
const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character")
const [nextPageUrl, setNextPageUrl] = useState<any>()
const [prevPageUrl, setPrevPageUrl] = useState<any>()
const [pages, setPages] = useState<any>()
useEffect(() => {
  const url = currentPageUrl
  setLoading(true)
  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setCharacters(data.results)
    setLoading(false);
    setNextPageUrl(data.info.next);
    setPrevPageUrl(data.info.prev);
    setPages(data.info.pages)
  }
  fetchData();
},[currentPageUrl])
function nextPage() {
  setCurrentPageUrl(nextPageUrl)
  }
  function prevPage() {
  setCurrentPageUrl(prevPageUrl)
  }
  function goToPage(num: any) {
  setCurrentPageUrl(`https://rickandmortyapi.com/api/character?page=${num}`)
  }
if (loading) return (<>
<div className='bg-gray-400 h-screen align-center items-center justify-center flex'>
 <p className='bg-gray-100 px-32 py-32'>Loading........</p>
</div>
</>)
const charList = characters.map((char : any) => <Characters  key={Math.floor(Math.random() * 990000)} name={char.name} img={char.image} status={char.status}/>)
  return (
    <div>
  <div className=''>
  <div className="max-w-[900px] mx-auto">
  <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Glasses Morty" />
</div>

  </div>
  <div className=''>
    <Pagination nextPage={nextPageUrl ? nextPage : null} prevPage={prevPageUrl ? prevPage : null} goToPage={goToPage} pages={pages} />
  </div>
       <div className="max-w-[900px] shadow-lg rounded-md overflow-y-auto  gap-x-32 gap-y-2 bg-gray-200 mx-auto grid grid-cols-2">
{charList}
  </div>
  <div className=''>
  <Pagination
    nextPage={nextPageUrl ? nextPage : null}
    prevPage={prevPageUrl ? prevPage : null}
    goToPage={goToPage}
    pages={pages}
  />
  </div>
    </div>
  )
}

export default Blogs;
