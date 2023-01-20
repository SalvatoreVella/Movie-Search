import { useEffect, useState } from "react"


export default function SearchForm() {
    const [infos, setInfos] = useState([])

    async function search(e) {
        e.preventDefault();
        try {
            const json = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_8p9jb7w1?title=${e.target.elements.title.value}&title_type=feature,tv_movie,tv_series,tv_special,tv_miniseries,documentary,short,&user_rating=1.0,10&moviemeter=30,3000&`);
            const data = await json.json();
            setInfos(() => data.results);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => console.log(infos), [infos])

    let map = infos.map(result => {
            if (result.image !== "https://imdb-api.com/images/original/nopicture.jpg") {
                return <img width="200px" src={result.image} alt={result.Title} key={result.id}></img>
            }
        })

    return <div>
        <form onSubmit={search}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <button>Search</button>
        </form>
        {infos && map}
    </div>
}