import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import ResultCard from "./Components/Card";
import "./app.css";
import { fetchMovie } from "./api";
import Navbar from "./Layout/Navbar";

const App = () => {
  // const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);

  const getMovieDetails = (name) => {
    fetchMovie(name).then((data) => {
      setResult(data.data.Search);
    });
  };

  return (
    <>
      <Navbar />
      <div className="app__center">
        <Row gutter={[0, 40]}>
          <Col span={24}>
            <Input
              prefix={<FileSearchOutlined />}
              style={{ width: 200 }}
              onChange={(e) => {
                getMovieDetails(e.target.value);
              }}
            />
          </Col>
          <Col span={12}>
            <ResultCard title="Results" content={result} />
          </Col>
          <Col span={12}>
            <ResultCard title="Nominations" />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default App;
