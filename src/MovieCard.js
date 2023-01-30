import { useNavigate, useParams } from "react-router"

export default function MovieCard({ img, titl, id, rating, duration, genres, age }) {
    const { title } = useParams();
    const navigate = useNavigate();

    return <div className="w-60 cursor-pointer overflow-hidden bg-black dark:bg-gray-200 dark:shadow-gray-600
    dark:shadow-md dark:border dark:border-white text-center rounded-md m-3
    border border-gray-600 text-white dark:text-black drop-shadow-2xl
    hover:brightness-50 pt-2 hover:scale-105 transition-all duration-250
    active:scale-95">
        <h3 className="text-md px-2 font-bold truncate">{titl}</h3>
        <p className="py-1">{age}</p>
        <img className="h-[350px] min-w-full mx-auto" src={img} alt={titl}></img>
        <div className="flex justify-between px-2">
            <span>IMDb {rating}</span>
            <span>{duration}</span>
        </div>
        <p>{genres}</p>
    </div>

}