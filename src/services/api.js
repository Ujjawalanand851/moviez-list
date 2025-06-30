const API_KEY ="9fec63d886ac364af509b2a37f159182";
const BASE_URL = "https://api.themoviedb.org/3";


export const getpopularmovies = async ()=>{
const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
const data= await response.json()
return data.results;
};

export const searchmovies = async (query)=>{
const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
const data= await response.json()
return data.results;
};