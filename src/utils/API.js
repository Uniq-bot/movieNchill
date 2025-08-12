import axios from "axios";

const API_KEY= 'dde3e3e911743eba56741a69e458f33e';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;



const FetchMovies = async () => {
  try {
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}

export default FetchMovies;

