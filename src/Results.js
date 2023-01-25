import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";

export default function Results({ title, results = [] }) {
    const [infos, setInfos] = useState({
        title: title,
        results: [...results],
    });
    
    let map = infos.results.map(result => {
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
        {infos.results && map}
    </div>
    )
}