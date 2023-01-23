import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Results from "./Results";
import SearchForm from "./SearchForm";

export default function ResultsPage() {
    console.log("ciao");

    return (
        <>
            <SearchForm />
            <Results />
        </>
    )
}