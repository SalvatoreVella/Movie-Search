import MoviePage from "./MoviePage";
import SearchForm from "./SearchForm";
import { Routes, Route } from "react-router-dom"
import ResultsPage from "./ResultsPage";

function App() {

  return (
      <div className="min-h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]  dark:via-slate-800 dark:to-black from-gray-900 via-gray-100 to-gray-900 dark:text-white">
    <Routes>
        <Route path="/" element={
          <SearchForm />
        }/>
          <Route path="/:title" element={<ResultsPage />} />
      </Routes>
        </div>
  );
}

export default App;
