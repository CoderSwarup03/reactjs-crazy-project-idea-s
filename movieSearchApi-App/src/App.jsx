import React, { useEffect, useState } from 'react'
import Searchbar from './components/Searchbar';
import Movielist from './components/Movielist';
import Pagination from './components/Pagination';

const App = () => {
  const [query, setQuery] = useState('')
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);

  let apiKey = 'f7798b09'
  const fetchMovie = async () => {
    if (!query) return;
    setLoading(false);
    try {
      let response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${query}&page=${page}`);
      let data = await response.json();

      if (data.Response === "True") {
        setMovie(data.Search);
        setTotalResult(parseInt(data.totalResult));
      } else {
        setMovie([]);
        setTotalResult(0);
      }
    } catch (error) {
      console.log(error.message);
    }
    setLoading(true);
  }
  useEffect(() => {
    fetchMovie()
  }, [page])

  const handleSeach=(searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    fetchMovie()
  }
  const totalPage = Math.ceil(totalResult / 10);

  return (
    <>
      <div>
        <Searchbar onSearch={handleSeach}/>

        {loading && <p className='text-2xl font-semibold text-center'>Loading...</p>}

        <Movielist loading={loading} movie={movie}/>
        
        {totalPage > 1 && (<Pagination page ={page} setPage={setPage} totalPage={totalPage} />)}
      
      </div>
    </>
  )
}

export default App