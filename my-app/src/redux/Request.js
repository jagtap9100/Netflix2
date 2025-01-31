const API_KEY = "90c299988a83472c1feb623816d342d6";

const requests = {
  fetchTrading: `https://api.themoviedb.org/3//trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixoriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentiers: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};
export default requests;
// https://api.themoviedb.org/3/discover/movie?api_key=90c299988a83472c1feb623816d342d6&with_genres=10749`,
