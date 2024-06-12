/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React from "react";

function TripGuide(props) {
  let newDescription = "";
  if (props.description.length > 100) {
    newDescription = props.description.slice(0, 100);
  } else {
    newDescription = props.description;
  }
  return (
    <div
      className="block-travel"
      css={css`
        display: flex;
        flex-direction: row;
        width: 80vw;
        height: 250px;
        box-sizing: border-box;
        margin: 0px;
        gap: 40px;
        padding: 100px;
      `}
    >
      <section
        className="main-picture"
        css={css`
          display: flex;
          flex: 2;
          justify-content: center;
          align-items: center;
        `}
      >
        <img
          src={props.extraPhoto}
          css={css`
            display: inline;
            width: 300px;
            height: 200px;
            border-radius: 30px;
          `}
        ></img>
      </section>
      <section 
        className="details"
        css={css`
          display: flex;
          flex: 8;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
        `}
      >
        <h3
          css={css`
            margin: 0px;
            font-family: "Prompt";
            font-size: 23px;
          `}
        >
          {props.title}
        </h3>
        <p
          css={css`
            margin: 0px;
            font-size: 13px;
            color: #838383;
            font-family: "Prompt";
          `}
        >
          {newDescription}
        </p>
        <a
          href={props.url}
          target="_blank"
          css={css`
            margin: 0px;
            font-size: 13px;
            color: #00ccff;
            width: 50px;
            font-family: "Prompt";
          `}
        >
          อ่านต่อ
        </a>
        <div
          css={css`
            display: flex;
            gap: 10px;
          `}
        >
          <span
            css={css`
              margin: 0px;
              font-size: 13px;
              color: #838383;
              font-family: "Prompt";
            `}
          >
            หมวด
          </span>
          {props.tag.map((item, index, array) => {
            return index == array.length - 1 ? (
              <>
                <span
                  css={css`
                    margin: 0px;
                    font-size: 13px;
                    color: #838383;
                    font-family: "Prompt";
                  `}
                >
                  และ
                </span>
                <a
                  key={index}
                  css={css`
                    margin: 0px;
                    font-size: 13px;
                    text-decoration: underline;
                    color: #838383;
                    font-family: "Prompt";
                  `}
                >
                  {item}
                </a>
              </>
            ) : (
              <a
                key={index}
                css={css`
                  margin: 0px;
                  font-size: 13px;
                  text-decoration: underline;
                  color: #838383;
                  font-family: "Prompt";
                `}
              >
                {item}
              </a>
            );
          })}
        </div>
        <div
          css={css`
            display: flex;
            gap: 20px;
          `}
        >
          {props.photos.map((item, index) => {
            return (
              <img
                key={index}
                src={item}
                css={css`
                  display: inline;
                  width: 75px;
                  height: 75px;
                  box-sizing: border-box;
                  border-radius: 10px;
                  margin-top: 10px;
                `}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TripGuide;