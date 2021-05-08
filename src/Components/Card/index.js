import React, { useContext } from "react";
import { Card } from "antd";
import SmallButton from "../Button";
import { MovieContext } from "../../store/MovieContext";

const { Meta } = Card;

const MovieCard = ({ movie, add }) => {
  const { addMovie, removeMovie } = useContext(MovieContext);
  return (
    <Card
      hoverable
      style={{ width: 200 }}
      actions={[
        <SmallButton
          movie={movie}
          name={add ? "Nominate" : "Remove"}
          onClick={() => (add ? addMovie(movie) : removeMovie(movie))}
        />,
      ]}
    >
      <Meta title={movie.Title} description={movie.Year} />
    </Card>
  );
};

export default MovieCard;
