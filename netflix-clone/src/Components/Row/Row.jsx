import React, { useEffect, useState } from "react";
import axios from "../../utils/Axios";
import "./Row.css"; // Your CSS file

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Row fetch error:", error);
      }
    }

    fetchData();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // Close trailer if it's already open
    } else {
      // Placeholder for later trailer logic
      console.log("Clicked movie:", movie);
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      {/* Container for scrollable posters */}
      <div className="row__posters">
        {movies.map((movie) => {
          const posterPath = isLargeRow
            ? movie.poster_path
            : movie.backdrop_path;
          if (posterPath) {
            return (
              <img
                key={movie.id}
                onClick={() => handleClick(movie)} // Make poster clickable
                className={`row__poster ${
                  isLargeRow ? "row__posterLarge" : ""
                }`}
                src={`${baseUrl}${posterPath}`}
                alt={movie?.name || movie?.title}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Row;

// import React, { useEffect, useState } from "react";
// import axios from "../../utils/Axios";
// import "./Row.css";

// const Row = ({ title, fetchUrl, isLargeRow = false }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   const baseUrl = "https://image.tmdb.org/t/p/original/";

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const request = await axios.get(fetchUrl);
//         setMovies(request.data.results);
//       } catch (error) {
//         console.error("Row fetch error:", error);
//       }
//     }

//     fetchData();
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl("");
//     } else {
//       // Placeholder for later trailer logic
//       console.log("Clicked movie:", movie);
//     }
//   };

//   return (
//     <div className="row">
//       <h2>{title}</h2>

//       <div className="row__posters">
//         {movies.map(
//           (movie) =>
//             ((isLargeRow && movie.poster_path) ||
//               (!isLargeRow && movie.backdrop_path)) && (
//               <img
//                 key={movie.id}
//                 onClick={() => handleClick(movie)}
//                 className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
//                 src={`${baseUrl}${
//                   isLargeRow ? movie.poster_path : movie.backdrop_path
//                 }`}
//                 alt={movie?.name || movie?.title}
//               />
//             )
//         )}
//       </div>
//     </div>
//   );
// };

// export default Row;

//  <img onclick={) => handleClick(movie)}
//                 key={index} src=('S{base_Url')${isLargerow >}movie.poster_path : movie.background-path'} alt={movie.name} className={row_poster $}{isLargeRow && "row_posterLarge"

// import React, { useEffect, useState } from "react";
// import axios from "../../utils/Axios";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import "./Row.css"; // Your CSS file

// const Row = ({ title, fetchUrl, isLargeRow = false }) => {
//   const [movies, setMovies] = useState([]);
//   const [trailerUrl, setTrailerUrl] = useState("");

//   const baseUrl = "https://image.tmdb.org/t/p/original/";

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const request = await axios.get(fetchUrl);
//         setMovies(request.data.results.slice(0, 20)); // Limit to 20 movies
//       } catch (error) {
//         console.error("Row fetch error:", error);
//       }
//     }

//     fetchData();
//   }, [fetchUrl]);

//   const handleClick = (movie) => {
//     if (trailerUrl) {
//       setTrailerUrl(""); // Close trailer if already open
//     } else {
//       movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
//         .then((url) => {
//           const urlParams = new URLSearchParams(new URL(url).search);
//           setTrailerUrl(urlParams.get("v"));
//         })
//         .catch((error) => console.log("Trailer not found:", error));
//     }
//   };

//   return (
//     <div className="row">
//       <h2>{title}</h2>

//       {/* Add fade effects if needed */}
//       <div className="row__fadeLeft" />
//       <div className="row__fadeRight" />

//       {/* Movie Posters (Scroll horizontally) */}
//       <div className="row__posters">
//         {movies.map((movie) => (
//           ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
//             <img
//               key={movie.id}
//               onClick={() => handleClick(movie)}
//               className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
//               src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//               alt={movie?.name || movie?.title}
//             />
//           )
//         ))}
//       </div>

//       {/* Show trailer */}
//       {trailerUrl && <YouTube videoId={trailerUrl} opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }} />}
//     </div>
//   );
// };

// export default Row;
