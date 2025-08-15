import axios from "axios";

const API_KEY = "dde3e3e911743eba56741a69e458f33e";
const BASE_URL = "https://api.themoviedb.org/3/movie/popular";

const FetchMovies = async () => {
  try {
    // Prepare requests for 50 pages at once
    const requests = Array.from({ length: 50 }, (_, i) =>
      axios.get(BASE_URL, {
        params: {
          api_key: API_KEY,
          page: i + 1,
        },
      })
    );

    // Fetch all pages in parallel
    const responses = await Promise.all(requests);

    // Merge all results
    const allMovies = responses.flatMap((res) => res.data.results);

    return allMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export default FetchMovies;
