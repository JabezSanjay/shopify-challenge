const axios = require("axios");

const api_key = process.env.REACT_APP_API_KEY;
const url = `http://www.omdbapi.com/?apikey=${api_key}&`;

export const fetchMovie = async (searchedMovie) => {
  let changeableUrl = url;

  changeableUrl = `${url}s=${searchedMovie}`;

  try {
    const data = await axios.get(changeableUrl);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
