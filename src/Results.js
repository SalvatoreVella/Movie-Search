import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";

export default function Results() {
    const [infos, setInfos] = useState([]);
    const { title } = useParams();

    useMemo(
        () => {
            fetch(`https://imdb-api.com/API/AdvancedSearch/k_8p9jb7w1?title=${title}`)
                .then(res => res.json())
                .then((data) => setInfos(() => data.results))
        }, [title]
    )

    let map = infos.map(result => {
        if (result.image !== "https://imdb-api.com/images/original/nopicture.jpg") {
            return <MovieCard
                img={result.image}
                title={result.title}
                id={result.id}
                genres={result.genres}
                rating={result.imDbRating}
                duration={result.runtimeStr}
            />
        }
    })

    return (
        <div className="flex min-h-custom justify-around items-center flex-wrap">
            {infos && map}
        </div>
    )
}