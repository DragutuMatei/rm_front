import React from "react";

function Banner({title, path}) {
  return (
    <section className="banner">
      <h1>{title}</h1>
      <h3>{path}</h3>
    </section>
  );
}

export default Banner;
