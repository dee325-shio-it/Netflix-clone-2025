import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;

// import React from "react";
// import Header from "../../Components/Header/Header";
// import Footer from "../../Components/Footer/Footer";
// import Row from "../../Components/Row/Row"; // Make sure this exists
// import requests from "../../requests"; // Path to your requests.js

// const Home = () => {
//   return (
//     <>
//       <Header />

//       <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
//       <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
//       <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
//       <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
//       <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
//       <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
//       <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
//       <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

//       <Footer />
//     </>
//   );
// };

// export default Home;
