import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '67482584'; // Replace with your actual API key

  const searchMovie = () => {
    if (searchInput === '') {
      setError('Please enter a movie title.');
      setSearchResults([]);
      return;
    }

    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
      .then((response) => {
        const data = response.data;
        if (data.Response === 'False') {
          setError(data.Error);
          setSearchResults([]);
        } else {
          setError(null);
          setSearchResults(data.Search || []);
        }
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
        setError('An error occurred while fetching movie data.');
        setSearchResults([]);
      });
  };

  const showMovieDetails = (imdbID) => {
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
      .then((response) => {
        const data = response.data;
        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setError(null);
          setSelectedMovie({
            title: data.Title,
            year: data.Year,
            genre: data.Genre,
            plot: data.Plot,
            poster: data.Poster,
          });
        }
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
        setError('An error occurred while fetching movie details.');
      });
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a movie title"
      />
      <button onClick={searchMovie}>Search</button>

      {error && <p className="error-message">{error}</p>}

      {selectedMovie ? (
        <div className="movie-details">
          <h2>{selectedMovie.title} ({selectedMovie.year})</h2>
          <img src={selectedMovie.poster} alt={`${selectedMovie.title} Poster`} />
          <p><strong>Genre:</strong> {selectedMovie.genre}</p>
          <p><strong>Plot:</strong> {selectedMovie.plot}</p>
        </div>
      ) : (
        <div className="search-results">
          <h2>Search Results</h2>
          {searchResults.map((result) => (
            <div key={result.imdbID} className="result-item" onClick={() => showMovieDetails(result.imdbID)}>
              <img src={result.Poster} alt={`${result.Title} Poster`} />
              <p>{result.Title} ({result.Year})</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
