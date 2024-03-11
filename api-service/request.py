
from requests.exceptions import HTTPError
import requests
import os

TMDB_API_KEY = os.getenv('TMDB_API_KEY', 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGY3MmViZDY0NzMyYzNhNzM4YjM4OTJiOGNlY2ViYyIsInN1YiI6IjY1ZWI3MGM3YTI4NGViMDE4NWI5ZWUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.63nlG_3Y5O5RvV7fB-xcgzrB-yir1oIvRIU6rX8RybE')

def make_tmdb_request(endpoint: str, params: dict = {}):
    url = f"https://api.themoviedb.org/3/{endpoint}"
    headers = {
        "Authorization": f"Bearer {TMDB_API_KEY}",
        "Accept": "application/json"
    }
    response = requests.get(url, params=params, headers=headers)
    try:
        return response.json()
    except HTTPError as e:
        raise HTTPError(response.status_code, detail="Failed to fetch data") from e
