import React from "react";
import { Link } from "gatsby";
import { card, front, back, button, shadow, backText } from "./Card.module.css";

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
      <div className={back}>
        <div>
          <div className={backText}>
            {backContent}
          </div>
          <br />
          {hasProjectPage ? (
            <Link to={projectPageLink}>
              <button className={button}>Project</button>
            </Link>
          ) : null}
          <a href={githubLink} target="_blank" rel="noreferrer">
            <button className={button}>GitHub</button>
          </a>
        </div>
        <video autoPlay loop muted>
          <source
            src={require(`../images/${backBackgroundImageUrl}`).default}
            type="video/webm"
          />
        </video>
      </div>
      <div className={shadow} />
    </div>
  );
};

export default Card;
