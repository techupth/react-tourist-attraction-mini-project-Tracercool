/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TripGuide from "../components/TripGuide";

function App() {
  const [listTripGuide, setListTripGuide] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getDataTripGuide = async (text) => {
    let result = await axios.get(
      "http://localhost:4001/trips?keywords=" + text
    );
    setListTripGuide(result.data.data);
  };
  const handleSearch = async (event) => {
    let text = event.target.value;
    setSearchText(text);
    getDataTripGuide(text);
  };

  useEffect(() => {
    getDataTripGuide(searchText);
  }, [searchText]);

  return (
    <div className="App">
      <div
        className="header"
        css={css`
          font-family: "Prompt";
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: #318ce7;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 60px;
          `}
        >
          เที่ยวไหนดี
        </h1>
        <p
          css={css`
            display: flex;
            width: 80vw;
            margin-left: 25vw;
          `}
        >
          ค้นหาที่เที่ยว
        </p>
        <div
          className="header-search-block"
          css={css`
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
          `}
        >
          <input
            onChange={handleSearch}
            placeholder="หาที่เที่ยวแล้วไปกัน .."
            value={searchText}
            css={css`
              border: none;
              &::placeholder {
                color: #318ce7;
            }
              &:focus {
                outline: 0px;
              }
            `}
          ></input>
        </div>

        <hr
          css={css`
            width: 50vw;
            color: black;
          `}
        ></hr>
      </div>
      <section
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {listTripGuide.map((item) => {
          return (
            <TripGuide
              key={item.eid}
              extraPhoto={item.photos.slice(0, 1)}
              title={item.title}
              description={item.description}
              url={item.url}
              tag={item.tags}
              photos={item.photos.slice(1)}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;