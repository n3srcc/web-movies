# web-movies
 # Requirements
 - Docker (Optional)
 - Node 18+
 - Python 3.7+

# Setup
- How to Obtain the API Key:
Register at https://www.themoviedb.org/settings/api to obtain the API Read Access Token.

 Set environment variables in the following paths:
  ## webfront
  Frontend service at port 3000
  - webfront/.env.local
  ```
    NEXT_PUBLIC_API_URL=http://localhost:8000
  ```
  ## api-service
  Backend service at port 8000
  - api-service/.env
  ```
    TMDB_API_KEY=
  ```
## Run locally (Without Docker)
 - api-service
  ```
    cd api-service
    pip install -r api/service/requirements.txt
    uvicorn main:app --reload
  ```
  - web-front
  ```
    cd webfront && npm install
    npm run dev
  ```
## Run locally with Docker (Recommended)
- startup application
  ```
  make run
  ```
- stop application
  ```
  make stop
  ```
- for cleanup
  ```
  make clean
  ```
