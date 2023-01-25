import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MoviePage() {
  const [film, setFilm] = useState([]);
const {id} = useParams()
useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '18af9ee291msh70a301a734cd7fap13f07ejsn57e8b52159f6',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  
  fetch(`https://streaming-availability.p.rapidapi.com/get/basic?country=it&imdb_id=${id}&output_language=en`, options)
    .then(response => response.json())
    .then(response => setFilm(() => response))
    .catch(err => console.error(err));
}, [])
    useEffect(() => console.log(film), [film])
  return (
<div>
    {film && <div className="App dark:bg-black">
      <h2 className="w-full">{film.originalTitle}</h2>
      <img className="w-full" src={film.backdropURLs?.original} />
      <p className="w-full">{film.episodes}</p>
      <p className="w-full">{film.overview}</p>
    </div>}
</div>  
    );
  }

export default MoviePage;