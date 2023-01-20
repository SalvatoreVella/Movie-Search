function MoviePage() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '18af9ee291msh70a301a734cd7fap13f07ejsn57e8b52159f6',
        'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
      }
    };
    
    fetch('https://streaming-availability.p.rapidapi.com/get/basic?country=it&imdb_id=%20&output_language=en', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    
    return (
      <div className="App">
      </div>
    );
  }
  
  export default MoviePage;