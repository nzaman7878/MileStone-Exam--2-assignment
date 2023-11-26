import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

// Functional component representing the main App
function App() {
  // State variables using the useState hook
  const [searchInput, setSearchInput] = useState(''); // Input for the movie search
  const [searchResults, setSearchResults] = useState([]); // Results of the movie search
  const [selectedMovie, setSelectedMovie] = useState(null); // Details of a selected movie
  const [error, setError] = useState(null); // Error message for handling API errors

  const apiKey = ''; // Replace with your actual API key

  // Function to handle the movie search
  const searchMovie = () => {
    // Check if the search input is empty
    if (searchInput === '') {
      setError('Please enter a movie title.');
      setSearchResults([]);
      return;
    }

    // Fetch movie data from the OMDB API
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`)
      .then((response) => {
        // Process the response data
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

  // Function to show details of a selected movie
  const showMovieDetails = (imdbID) => {
    // Fetch movie details from the OMDB API using the movie's IMDb ID
    axios
      .get(`https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
      .then((response) => {
        // Process the response data
        const data = response.data;
        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setError(null);
          // Set details of the selected movie
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

  // JSX structure representing the UI of the App
  return (
    <div className="App">
      <h1>Movie Search</h1>
      {/* Input for entering the movie title */}
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a movie title"
      />
      {/* Button to trigger the movie search */}
      <button onClick={searchMovie}>Search</button>

      {/* Display an error message if there is an error */}
      {error && <p className="error-message">{error}</p>}

      {/* Display movie details if a movie is selected, otherwise, show search results */}
      {selectedMovie ? (
        <div className="movie-details">
          {/* Display details of the selected movie */}
          <h2>{selectedMovie.title} ({selectedMovie.year})</h2>
          <img src={selectedMovie.poster} alt={`${selectedMovie.title} Poster`} />
          <p><strong>Genre:</strong> {selectedMovie.genre}</p>
          <p><strong>Plot:</strong> {selectedMovie.plot}</p>
        </div>
      ) : (
        <div className="search-results">
          {/* Display search results as a grid of result items */}
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
