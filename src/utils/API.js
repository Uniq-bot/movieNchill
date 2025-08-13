import axios from "axios";

const API_KEY = 'dde3e3e911743eba56741a69e458f33e';
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';

const FetchMovies = async () => {
  try {
    const allMovies = [];

    // Fetch 5 pages to get ~100 movies
    for (let page = 1; page <= 20; page++) {
      const response = await axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
          page: page,
        },
      });

      allMovies.push(...response.data.results);
    }

    return allMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export default FetchMovies;
