import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Menu from '../components/layout/Menu';
import { fetchPopularMovies, fetchSearchMovies } from '@/app/api/RestClient';

const AppContext = createContext({});

export const useDataContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  const router = useRouter();

  useEffect(() => {
    const asyncFetchSearchMovies = async () => {
      const jsonData = await fetchSearchMovies(currentPage, searchTerm);
      setData(jsonData.results);
      setTotalResults(jsonData.total_results);
    };

    const asyncFetchPopularMovies = async () => {
      const jsonData = await fetchPopularMovies(currentPage);
      setData(jsonData.results);
      setTotalResults(jsonData.total_results);
    };

    if ((router.pathname == '/' || router.pathname.indexOf('movie')) && searchTerm != '') {
      asyncFetchSearchMovies();
    }

    if (router.pathname == '/') {
      asyncFetchPopularMovies();
    }

  }, [currentPage, searchTerm, router.pathname]);

  return (
    <AppContext.Provider value={{ searchTerm, setSearchTerm, data, setData, currentPage, setCurrentPage, totalResults, setTotalResults }}>
      <Menu searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {children}

    </AppContext.Provider>
  );
};
