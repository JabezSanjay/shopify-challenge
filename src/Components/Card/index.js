import React, { useContext } from "react";
import { Card } from "antd";
import SmallButton from "../Button";
import { MovieContext } from "../../store/MovieContext";
import styled from "styled-components";

const { Meta } = Card;

const MovieCard = ({ movie, add }) => {
  const { addMovie, removeMovie } = useContext(MovieContext);
  return (
    <CardTag>
      <Card
        hoverable
        className="card"
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
    </CardTag>
  );
};

export default MovieCard;

const CardTag = styled.div`
  .card {
    width: 200px;
  }
  @media (max-width: 700px) {
    .card {
      width: 170px;
    }
  }
`;
