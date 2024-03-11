"use client";
import React from 'react';
import Link from 'next/link';
import { useDataContext } from '@/app/context/AppProvider';
import { Pagination } from '@/app/components/Pagination';


const HomePage = () => {
  let { searchTerm, data, totalResults, currentPage, setCurrentPage } = useDataContext();

  let filteredData = [];
  if (Array.isArray(data)) {
    filteredData = data.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {filteredData.map(movie => (
            <div key={movie.id} className="bg-white p-4 rounded shadow">
              <Link href={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full max-h-120"
                />
              </Link>
              <div className="mt-2">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-600">{movie.release_date}</p>
                <p className="mt-2 overflow-hidden h-80">{movie.overview}</p>
              </div>
            </div>
          ))}
        </div>

        {data.length > 1 && (
          <Pagination
            totalItems={totalResults}
            currentPage={currentPage}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
}

export default HomePage;
