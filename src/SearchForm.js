import { useNavigate } from "react-router";


export default function SearchForm() {

    const navigate = useNavigate()


    async function search(e) {
        e.preventDefault();
        navigate(`/${e.target.elements.title.value}`);
    }


    return <div className="dark:text-white py-5 bg-opacity-10 bg-slate-500">
        <h2 className="text-center text-3xl pb-3">Search movie by title</h2>
        <form onSubmit={search} className="flex flex-col justify-center gap-3 items-center sm:flex-row" >
            <label htmlFor="title" className="text-lg">Title:</label>
            <input type="text" name="title" required id="title" placeholder="Type a movie title here..." className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <button className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-blue-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Search</span>
            </button>
        </form>
    </div>

}