import { useEffect, useState } from "react";

function MoviePage() {
const [film, setFilm] = useState([]);
useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '18af9ee291msh70a301a734cd7fap13f07ejsn57e8b52159f6',
      'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    }
  };
  
  fetch('https://streaming-availability.p.rapidapi.com/get/basic?country=it&imdb_id=tt14452776&output_language=en', options)
    .then(response => response.json())
    .then(response => setFilm(() => response))
    .catch(err => console.error(err));
}, [])
    useEffect(() => console.log(film), [film])
    return (
      <div className="App dark:bg-black">
        <img className="w-full sm:w-1/2 dark:border-white dark:border-4" src={film.backdropURLs.original}/>
      </div>
    );
  }
  
  export default MoviePage;