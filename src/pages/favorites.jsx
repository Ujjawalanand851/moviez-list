import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import Moviecard from "../components/moviecard";
function Favorites(){
    const {favorites}= useMovieContext();
    if(favorites){
return (
<div className="favorites"><h2>your favorites</h2>
<div className="movies_grid">
        {favorites.map((movie) => (
          <Moviecard movie={movie} key={movie.id} />
        ))}
      </div></div>
    );}
    return(
        <div className="favorites-empty">
            <h2>add movies to your favorites</h2>
            <p>no movies added</p>
        </div>
    )
}
export default Favorites