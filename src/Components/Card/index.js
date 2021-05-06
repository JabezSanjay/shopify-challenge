import React from "react";
import { Card } from "antd";

const ResultCard = ({ title, content }) => {
  return (
    <Card title={title} bordered={false} style={{ width: 300 }}>
      {content?.map((movie) => {
        return <li>{movie.name}</li>;
      })}
    </Card>
  );
};

export default ResultCard;
