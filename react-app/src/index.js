import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import movies from './movies';
import Structure from './Structure'

ReactDOM.render(
  <>
  <Structure></Structure>,
  <ul className="search-results row list-unstyled">
    {
      movies.slice(0,30).map(movie => <App title={movie.Title} year={movie.movie_year} rating={movie.imdb_rating}></App>)
    }
  </ul> </>
  ,
  document.getElementById('root')
);

