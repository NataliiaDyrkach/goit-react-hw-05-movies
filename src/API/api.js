const key = '3d1aeb62cdabb9af26b73d92f33b1561';

async function getTrending() {
  const url = 'https://api.themoviedb.org/3/trending/all/day';
  const filter = `?api_key=${key}`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

async function getSearchMovies(query, page = 1) {
  const url = `https://api.themoviedb.org/3/search/movie`;
  const filter = `?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

async function getMovieDetails(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

async function getMovieCredits(movieId) {
  const key = 'd783920aea034ba2adae6031a0bf96c0';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
  const filter = `?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}

async function getMovieReviews(movieId) {
  const key = 'd783920aea034ba2adae6031a0bf96c0';
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
  const filter = `?api_key=${key}&language=en-US&page=1`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
}


export {getTrending, getSearchMovies, getMovieDetails, getMovieCredits, getMovieReviews}