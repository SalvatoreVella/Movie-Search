import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieCard from "./MovieCard";

export default function Results({ title }) {
    const [infos, setInfos] = useState({
        title: title,
        results: [],
    });
    
    
    
    useEffect(() => {
        async function fetch() {
        try {
            const json = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_8p9jb7w1?title=${title}`);
            const data = await json.json();
            setInfos((pre) => {
                return {
                    ...pre,
                results: data.results
            }
            });
        } catch (err) {
            console.error(err);
        } 
        }   
        fetch()  
    }, [title]);
    
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