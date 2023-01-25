import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Results from "./Results";
import SearchForm from "./SearchForm";

export default function ResultsPage() {
    const [infos, setInfos] = useState([])
    console.log("ciao");
    const {title} = useParams();
useEffect(
    () => {
/*         fetch(`https://imdb-api.com/API/AdvancedSearch/k_8p9jb7w1?title=${title}`)
        .then(res => res.json())
        .then((data) => setInfos(() => data.results)) */
    }, []
)


        console.log(title);
  

    return (
        <div>
        <SearchForm/>
        <h1>Mi sta niscennu u senzu</h1>
        <Results title={title} results={infos}/> 
        </div>
    )
}