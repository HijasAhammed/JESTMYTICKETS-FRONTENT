import React from 'react';
import Avesham from '../assets/GJXEfkfaAAAlng_-840x440.jpg'

// Dummy movie data
const movies = [
 {
   id: 1,
   title: 'The Avengers',
   poster: 'https://example.com/avengers-poster.jpg',
   genre: 'Action, Adventure, Sci-Fi',
   rating: 4.5,
 },

];

function Userhome() {
 return (
   <div className='flex '>
     <div className="text-white flex">
       <div className="movie-list flex gap-16">
         {movies.map((movie) => (
           <div key={movie.id} className="movie-card w-60">
             <img src={Avesham} alt={movie.title} />
             <h3>{movie.title}</h3>
             <p>Genre: {movie.genre}</p>
             <p>Rating: {movie.rating}</p>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}

export default Userhome;