import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

function MoviePage() {
const [film, setFilm] = useState([]);

const prevState = useLocation()
const data = !!prevState ? prevState.state.data : ""
console.log(data);
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
    <div>
      {film && <div className="App bg-gradient-to-r from-white via-gray-400 to-gray-600 flex flex-col items-center justify-center  dark:bg-black">
        <h2 className="w-full flex items-center justify-center text-6xl">{film.originalTitle}</h2>
        <img className="w-3/4 rounded-md flex items-center justify-center m-5" src={film.backdropURLs?.original} alt="movie"/>
        {film.episodes &&  <span className="flex items-center justify-between">
        <span className="flex items-center justify-center rounded-md bg-gradient-to-tr drop-shadow-2xl from-gray-500 via-gray-300 to-gray-100">
          <h4 className="text-2xl m-3">Episodes: </h4>
          <p className="w-3/4 m-3 text-xl">{film.episodes}</p>
        </span>
        <span className="flex items-center justify-center rounded-md m-3 bg-gradient-to-br drop-shadow-2xl from-gray-100 via-gray-300 to-gray-500">
          <h4 className="text-2xl m-3">Seasons: </h4>
          <p className="w-3/4 m-3 text-xl">{film.seasons}</p>
        </span>
        </span>}
        <span className="flex-column align-center rounded-md m-3 rounded-md bg-gradient-to-r drop-shadow-2xl from-gray-500 via-gray-300 to-gray-100">
          <h4 className="text-2xl flex items-center justify-center m-3">Plot:</h4>
          <p className=" flex items-center justify-center m-3 text-xl">{film.overview}</p>
        </span>
      </div>}
    </div>
  );
}

export default MoviePage;