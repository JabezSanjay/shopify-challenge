import React, { createContext, useReducer } from "react";
import { MovieReducer, createStorage } from "./MovieReducer";

export const MovieContext = createContext();

const storage = localStorage.getItem("nomination")
  ? JSON.parse(localStorage.getItem("nomination"))
  : [];

const initialState = {
  nominatedMovies: storage,
  ...createStorage(storage),
};

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const addMovie = (payload) => {
    dispatch({ type: "ADD_ITEM", payload });
  };

  const removeMovie = (payload) => {
    dispatch({ type: "REMOVE_ITEM", payload });
  };

  const clearNomination = () => {
    dispatch({ type: "CLEAR" });
  };

  const isNominated = () => {
    dispatch({ type: "IS_NOMINATED" });
  };

  const contextValues = {
    addMovie,
    removeMovie,
    clearNomination,
    isNominated,
    ...state,
  };

  return (
    <MovieContext.Provider value={contextValues}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
