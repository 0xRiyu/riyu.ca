import React from "react";
import { card, front, back, button, shadow } from "./Card.module.css";

const Card = ({
  frontBackgroundImageUrl,
  backBackgroundImageUrl,
  frontContent,
  backContent,
}) => {
  return (
    <a className={card} href="#!">
      {/*
       */}
      <div
        className={front}
        style={{ backgroundImage: `url(` + require(`../images/${frontBackgroundImageUrl}`).default + `)` }}
      >
        <p>{frontContent}</p>
      </div>
      <div
        className={back}
        style={{ backgroundImage: `url(` + require(`../images/${backBackgroundImageUrl}`).default + `)` }}
      >
        <div>
          <p>{backContent}</p>
          <button className={button}>Github</button>
        </div>
      </div>
      <div className={shadow} />
    </a>
  );
};

export default Card;
