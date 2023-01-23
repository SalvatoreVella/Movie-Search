import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";

export default function Results() {
    const [infos, setInfos] = useState([]);
    const { title } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_8p9jb7w1?title=${title}`)
                const data = await response.json();
                setInfos(data.results)
                console.log(data.results);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()
    }, [title])

    let map = infos.map(result => {
        if (result.image !== "https://imdb-api.com/images/original/nopicture.jpg") {
            return <MovieCard
                img={result.image}
                titl={result.title}
                id={result.id}
                genres={result.genres}
                rating={result.imDbRating}
                duration={result.runtimeStr}
                key={result.id}
                age={result.description}
            />
        } else {
            return null;
        }
    })

    return (
        <div className="flex min-h-custom justify-around items-center flex-wrap">
            {infos && map}
        </div>
    )
}