import React from "react";
import { Link } from "gatsby";
import { card, front, back, button, shadow } from "./Card.module.css";

const Card = ({
  frontBackgroundImageUrl,
  backBackgroundImageUrl,
  frontContent,
  backContent,
  projectPageLink = "#!",
  githubLink,
}) => {
  var hasProjectPage = projectPageLink !== "#!";

  return (
    <div className={card}>
      {/*
       */}
      <div
        className={front}
        style={{
          backgroundImage:
            `url(` +
            require(`../images/${frontBackgroundImageUrl}`).default +
            `)`,
        }}
      >
        <p>{frontContent}</p>
      </div>
      <div
        className={back}
        style={{
          backgroundImage:
            `url(` +
            require(`../images/${backBackgroundImageUrl}`).default +
            `)`,
        }}
      >
        <div>
          <p>{backContent}</p>
          <br /> <br />
          {hasProjectPage ? (
            <Link to={projectPageLink}>
              <button className={button}>Project</button>
            </Link>
          ) : null}
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button className={button}>GitHub</button>
          </a>
        </div>
      </div>
      <div className={shadow} />
    </div>
  );
};

export default Card;
