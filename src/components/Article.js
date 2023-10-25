import React from "react";

function Article(props) {
  const { title, date, preview } = props;
  const minutesToRead = Math.ceil((preview.length / 1000) * 5);

  const coffeeCups = Array.from({ length: Math.ceil(minutesToRead / 5) }, (_, index) => (
    <span key={index} role="img" aria-label="coffee cup">
      ☕️
    </span>
  ));

  const bentoBoxes = Array.from({ length: Math.ceil(minutesToRead / 10) }, (_, index) => (
    <span key={index} role="img" aria-label="bento box">
      🍱
    </span>
  ));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <div>
        {minutesToRead <= 30 ? coffeeCups : bentoBoxes} {minutesToRead} min read
      </div>
    </article>
  );
}

export default Article;
