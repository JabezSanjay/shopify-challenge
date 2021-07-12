const axios = require("axios");

const api_key = process.env.REACT_APP_API_KEY;
const url = `https://www.omdbapi.com/?apikey=${api_key}&`;

export const fetchMovie = async (searchedMovie, page) => {
  let changeableUrl = url;

  changeableUrl = `${url}s=${searchedMovie}&page=${page}`;

  try {
    const data = await axios.get(changeableUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};
