export default function MovieCard({ img, title, id, rating, duration, genres }) {

    return <div className="w-60 cursor-pointer overflow-hidden bg-black dark:bg-gray-200 dark:shadow-gray-600
    dark:shadow-md dark:border dark:border-white text-center rounded-md m-3
    border border-gray-600 text-white dark:text-black drop-shadow-2xl
    hover:brightness-50 hover:scale-105 transition-all duration-250
    active:scale-95">
        <h3 className="text-md px-2 py-2 font-bold truncate">{title}</h3>
        <img className="h-84 w-full" src={img} alt={title} key={id}></img>
        <div className="flex justify-between px-2">
            <span>IMDb {rating}</span>
            <span>{duration}</span>
        </div>
            <p>{genres}</p>
    </div>

}