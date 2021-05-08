import React, { useContext } from "react";
import { Button } from "antd";
import { MovieContext } from "../../store/MovieContext";

const SmallButton = ({ name, movie, disabled, loading, onClick }) => {
  const { nominatedMovies } = useContext(MovieContext);

  if (
    name === "Nominate" &&
    nominatedMovies.find((item) => item.imdbID === movie.imdbID)
  ) {
    name = "Nominated";
    disabled = true;
  }

  return (
    <Button
      disabled={disabled}
      laoding={loading}
      className="app__button"
      size="large"
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default SmallButton;
