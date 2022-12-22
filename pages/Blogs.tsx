import React, { useEffect, useState } from 'react'
import Home from '.';
import Characters from './Home';
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
if (loading) return "Loading..."
const charList = characters.map((char : any) => <Characters  key={Math.floor(Math.random() * 990000)} name={char.name} img={char.image} />)
  return (
    <div>
  <div className=''>
  <div className="mb-6 max-w-[400px] mx-auto">
  <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">Character Name</label>
  <input type="text" id="username-success" className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Morty Smith" />
  <p className="mt-2 text-sm text-green-600 dark:text-green-500"><span className="font-medium">Alright!</span> Character Name available!</p>
</div>
  </div>
       <div className="max-w-[700px]  overflow-y-auto my-2 gap-x-32 gap-y-2 bg-gray-700 mx-auto grid grid-cols-2">
{charList}
  </div>
    </div>
  )
}

export default Blogs;
