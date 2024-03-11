import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MovieDetail from '@/app/components/movie/MovieDetail';
import { fetchMovieDetails } from '@/app/api/RestClient';

function MovieContainer() {
  const router = useRouter();
  const { id } = router.query;

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const asyncMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovieDetails(movieData);
    };

    if (id) {
      asyncMovieDetails();
    }
  }, [id]);

  return (
    <MovieDetail movieDetails={movieDetails} />
  );
}

export default MovieContainer;

