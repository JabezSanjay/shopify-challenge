import React, { useState } from "react";
import { Row, Col, Input } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import "./app.css";
import { fetchMovie } from "./api";
import Navbar from "./Layout/Navbar";
import styled from "styled-components";

const App = () => {
  // const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  console.log(result);

  const getMovieDetails = (name, page) => {
    fetchMovie(name, page).then((data) => {
      setResult(data.data.Search);
    });
  };

  return (
    <AppTag>
      <Navbar />
      <div className="app">
        <div className="app-left">
          <Row className="app-left__row" justify="center" gutter={[16, 32]}>
            <Col span={20}>
              <h1 className="app-left__row--headText">
                Nominate using <span>The Shoppies!</span>
              </h1>
              <Col span={20}>
                <h3>Search and nominate 5 movies.</h3>
              </Col>
            </Col>
            <Col span={12}>
              <Input
                prefix={<FileSearchOutlined />}
                onChange={(e) => {
                  getMovieDetails(e.target.value, 1);
                }}
                size="large"
              />
            </Col>
          </Row>
        </div>
        <div className="app-right">
          <Row className="app-right__row" justify="center">
            <Col span={20}>
              <h1>
                Nominated <span>0/5</span>
              </h1>
            </Col>
          </Row>
        </div>
      </div>
    </AppTag>
  );
};

export default App;

const AppTag = styled.nav`
  .app {
    height: 100vh;
    display: flex;
    &-left {
      width: 50vw;
      background-color: #fffbdf;
      &__row {
        padding-top: 15vh;
        &--headText {
          font-size: 2rem;
          span {
            display: block;
            color: #004c3f;
          }
        }
        h3 {
          font-size: 1.1rem;
        }
      }
    }
  }
  .app-right {
    width: 50vw;
    background-color: #fbf7ed;
    &__row {
      padding-top: 15vh;
      h1 {
        text-align: right;
      }
    }
  }
`;
