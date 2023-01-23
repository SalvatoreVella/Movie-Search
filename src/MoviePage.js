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

  const fetchData = async () => {
    try {
      const response = await fetch(`https://streaming-availability.p.rapidapi.com/get/basic?country=it&imdb_id=${id}&output_language=en`, options)
      const data = await response.json();
      setFilm(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  fetchData()
}, [id])

    return (
      <div className="App dark:bg-black">
        <img className="w-full sm:w-1/2 dark:border-white dark:border-4" alt={film.title} src={film.backdropURLs?.original}/>
      </div>
    );
  }
  
  export default MoviePage;