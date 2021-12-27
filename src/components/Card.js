import React from "react";
import { Link } from "gatsby";
import { card, front, back, button, backText } from "./Card.module.css";

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
      {frontContent}
      </div>
      <div className={back}>
        <video
          loop
          muted
          preload="metadata"
          onMouseOver={(event) => event.target.play()}
          onFocus={(event) => event.target.play()}
          src={require(`../images/${backBackgroundImageUrl}`).default}
          type="video/webm"
          playsInline
        />
        <div className={backText}>{backContent}</div>
        <div>
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
    </div>
  );
};

export default Card;
