from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from request import make_tmdb_request

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["GET"],
    allow_headers=["*"],
)

@app.get("/api/movies/popular")
def get_popular_movies(page: int = 1):
    try:
        response = make_tmdb_request("movie/popular", params={"page": page})
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/movies/search")
def search_movies(query: str, page: int = 1):
    try:
        response = make_tmdb_request("search/movie", params={"query": query, "page": page})
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/movie/{movie_id}")
def search_movies(movie_id: int = 0):
    try:
        response = make_tmdb_request(f"movie/{movie_id}")
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
