import React, { useContext, useState } from "react";
import { Row, Col, Input, Spin, Alert, Progress } from "antd";
import { FileSearchOutlined } from "@ant-design/icons";
import "./app.css";
import { fetchMovie } from "./api";
import Navbar from "./Layout/Navbar";
import styled from "styled-components";
import MovieCard from "./Components/Card";
import { MovieContext } from "./store/MovieContext";

const App = () => {
  // const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { nominatedMovies } = useContext(MovieContext);

  const getMovieDetails = async (name, page) => {
    setLoading(true);
    await fetchMovie(name, page).then((data) => {
      if (data.data.Response === "False") {
        setError(data.data.Error);
      } else {
        setError("");
        setResult(data.data.Search?.splice(0, 3));
      }
    });
    setLoading(false);
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
              {nominatedMovies.length < 5 ? (
                <h3>Search and nominate 5 movies of your choice!</h3>
              ) : (
                <h2>You have nominated 5 movies!</h2>
              )}
            </Col>
            {nominatedMovies.length < 5 && (
              <Col span={20}>
                <Input
                  prefix={<FileSearchOutlined />}
                  onChange={(e) => {
                    getMovieDetails(e.target.value, 1);
                  }}
                  size="large"
                />
              </Col>
            )}

            {error && error !== "Incorrect IMDb ID." && (
              <Col span={24} className="center">
                <Alert message={error} type="error" showIcon closable />
              </Col>
            )}

            {loading && (
              <Col span={24} className="center">
                <Spin size="large" />
              </Col>
            )}

            {nominatedMovies.length < 5 &&
              error === "" &&
              result?.map((movie, key) => {
                return (
                  <Col key={key}>
                    <MovieCard movie={movie} add={true} />
                  </Col>
                );
              })}
            <Progress
              type="circle"
              percent={nominatedMovies.length * 20}
              className="app-left__row--progress"
            />
          </Row>
        </div>
        <div className="app-right">
          <Row className="app-right__row" justify="center" gutter={[16, 32]}>
            <Col span={20} style={{ marginBottom: 180 }}>
              <h1>
                Nominated <span>{nominatedMovies.length}/5</span>
              </h1>
            </Col>

            {nominatedMovies?.map((movie, key) => {
              return (
                <Col key={key}>
                  <MovieCard movie={movie} />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </AppTag>
  );
};

export default App;

const AppTag = styled.div`
  .app {
    min-height: 100vh;
    display: flex;

    &-left {
      width: 50vw;
      background-color: #eeeeee;
      position: relative;
      &__row {
        padding-top: 15vh;
        &--headText {
          font-size: 2rem;
          span {
            display: block;
            color: #004c3f;
            font-weight: 700;
            font-size: 2.35rem;
          }
        }
        &--progress {
          position: absolute;
          top: 40px;
          right: -4.4em;
        }

        h3 {
          font-size: 1.1rem;
        }
      }
    }
  }
  .app-right {
    width: 50vw;
    background-color: #aad8d3;
    &__row {
      padding-top: 15vh;
      h1 {
        text-align: right;
        font-size: 1.25rem;

        span {
          font-size: 1.74rem;
          color: #004c3f;
        }
      }
    }
  }
`;
