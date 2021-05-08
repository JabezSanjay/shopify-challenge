import React, { useContext } from "react";
import { Card } from "antd";
import SmallButton from "../Button";
import { MovieContext } from "../../store/MovieContext";

const { Meta } = Card;

const MovieCard = ({ movie }) => {
  const { addMovie } = useContext(MovieContext);
  return (
    <Card
      hoverable
      style={{ width: 200 }}
      actions={[
        <SmallButton
          movie={movie}
          name="Nominate"
          onClick={() => addMovie(movie)}
        />,
      ]}
    >
      <Meta title={movie.Title} description={movie.Year} />
    </Card>
  );
};

export default MovieCard;
