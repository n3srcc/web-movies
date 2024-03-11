
function convertToPercentage(number) {
  return `${(number * 10).toFixed(0)}%`;
}

function MovieDetail({ movieDetails }) {
  if (!movieDetails) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="bg-white p-4 rounded shadow flex">
          <img
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movieDetails.poster_path}`}
            alt={movieDetails.title}
            className="h-auto max-h-190 mr-4"
          />
          <div>
            <h2 className="text-lg font-semibold">{movieDetails.title}</h2>
            <p className="text-sm mb-3 text-gray-600"><span className="font-semibold">Relase Date:</span> {movieDetails.release_date}</p>
            <p className="text-sm mb-3 text-gray-600"><span className="font-semibold">Duration:</span> {movieDetails.runtime} minutes</p>
            <p className="text-sm mb-3 text-gray-600"><span className="font-semibold">User Score:</span> {convertToPercentage(movieDetails.vote_average)}</p>
            
            <div className="flex flex-wrap">
              {movieDetails.genres.map(genre => (
                <span key={genre.id} className="mr-2 mb-2 px-2 py-1 bg-gray-200 rounded">{genre.name}</span>
              ))}
            </div>
            <p className="mt-2">{movieDetails.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
