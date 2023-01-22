import { useParams } from "react-router";
import Results from "./Results";
import SearchForm from "./SearchForm";

export default function ResultsPage() {
    const title = useParams();
    return (
        <div>
        <SearchForm/>
        <h1>Porco</h1>
        <Results title={title}/> 
        </div>
    )
}