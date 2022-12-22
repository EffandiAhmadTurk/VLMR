import React, { useEffect, useState } from 'react'
import Home from '.';
import Characters from './Home';
import Pagination from './Pagination';
interface IDatePickerProps {
  applicationMode?: boolean;
  value: string;
  setValue: (value: string) => void;
}
const Blogs = () => {
  const [loading, setLoading] = useState<any>(true)
  const [characters, setCharacters] = useState<[]>([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character")
  const [nextPageUrl, setNextPageUrl] = useState<any>()
  const [prevPageUrl, setPrevPageUrl] = useState<any>()
  const [pages, setPages] = useState<any>()
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  console.log(q , "setQ")
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]); 
  function search(items: any[]) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }
  useEffect(() => {
    fetch(
        "https://rickandmortyapi.com/api/character?page`"
    )
        .then((res) => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
}, []);

const data = Object.values(items);
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
  }, [currentPageUrl])
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
  const charList = characters.map((char: any) => <Characters key={Math.floor(Math.random() * 990000)} name={char.name} img={char.image} status={char.status} />)
  if (error) {
    return (
      <p>
        {error?.message}, if you get this error, the free API I used
        might have stopped working, but I created a simple example that
        demonstrate how this works,{" "}
        <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
          {" "}
          check it out{" "}
        </a>{" "}
      </p>
    );
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div>
        <div className=''>
          <div className="max-w-[900px] mx-auto">
            <input type="search"
              name="search-form"
              id="search-form"
              onChange={(e) => setQ(e.target.value)}
              value={q} className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400" placeholder="Glasses Morty" />
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
}

export default Blogs;
