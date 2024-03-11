"use client";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchSearchMovies(page, searchTerm) {
    try {
        const response = await fetch(`${API_URL}/api/movies/search?page=${page}&query=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();

    } catch (error) {
        throw new Error(error.message);
    }
}

export async function fetchMovieDetails(id) {
    try {
        const response = await fetch(`${API_URL}/api/movie/${id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch movie details');
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}


export async function fetchPopularMovies(page) {
    try {
        const response = await fetch(`${API_URL}/api/movies/popular?page=${page}`);
        if (!response.ok) {
            throw new Error('Failed to fetch popular movies');
        }
        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}
