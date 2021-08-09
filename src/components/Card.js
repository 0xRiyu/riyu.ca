import React from "react";
import {
  card,
  front,
  back,
  button,
} from "./Card.module.css";

const Card = ({
  frontBackgroundImageUrl,
  backBackgroundImageUrl,
  frontContent,
  backContent,
}) => {
  return (
    <a className={card} href="#!">
      <div
        className={front}
        style={{ backgroundImage: `url(${frontBackgroundImageUrl})` }}
      >
        <p>{frontContent}</p>
      </div>
      <div
        className={back}
        style={{ backgroundImage: `url(${backBackgroundImageUrl})` }}
      >
        <div>
          <p>{backContent}</p>
          <button className={button}>Github</button>
        </div>
      </div>
    </a>
  );
};

export default Card;
