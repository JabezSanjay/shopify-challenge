import React from "react";
import { Card } from "antd";
import SmallButton from "../Button";

const { Meta } = Card;

const MovieCard = ({ movie }) => {
  return (
    <Card hoverable style={{ width: 200 }} actions={[<SmallButton />]}>
      <Meta title={movie.Title} description={movie.Year} />
    </Card>
  );
};

export default MovieCard;
