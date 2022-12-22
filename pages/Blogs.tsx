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
const charList = characters.map((char : any) => <Characters key={Math.floor(Math.random() * 10000)} name={char.name} img={"src"} />)
  return (
    <div>
       <div className="char-cards">
{charList}
  </div>
    </div>
  )
}

export default Blogs;
