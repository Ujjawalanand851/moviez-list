
import Moviecard from "../components/moviecard";
import "../css/Home.css";
import React, { useState, useEffect } from "react";
import { searchmovies, getpopularmovies } from "../services/api";
function Home() {


  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setmovies] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);


  useEffect(() => {

    const loadpopularmovies = async () => {
      try {
        const popularmovies = await getpopularmovies()
        setmovies(popularmovies)
      }

      catch (err) {
        console.log(err)
        seterror("failed to load movies....")
      }

      finally {
        setloading(false)
      }
    }

    loadpopularmovies()
  }, [])

  const handlesearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return
    if(loading) return 

    setloading(true)
    
    try{
      const searchResults = await searchmovies(searchQuery);
      setmovies(searchResults)
      seterror(null)
    }

  catch (err){
console.log(err)
seterror("failed to search movies....")
}

finally {
  setloading(false)
}

  };

return (
     <div className="home">
     <form onSubmit={handlesearch} className="search-form">
    <input
          type="text"
          placeholder="   search for movies...."
          className="search_input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">search</button>
      </form>

{error && <div className="error-message">{error}</div>}
      {loading ? <div className="loading">loading.....</div> : <div className="movies_grid">
        {movies.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div>
      }


    </div>
  );

}
export default Home