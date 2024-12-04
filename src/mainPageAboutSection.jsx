import React from "react";
import "./styles/about.css";

<link
  href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap"
  rel="stylesheet"
></link>;
function mainPageAboutSection() {
  return (
    <section id="about">
      <h2 className="about-headers">WHO AM I?</h2>
      <img className="aboutpic" src="./res/aboutme.jpg" />

      <p className="about-text">
        Hey there! My name is Atiya Haque, and I am an aspiring UX Designer. My
        combined passions for technology, art, and creativity have brought me
        here. I am eager to grow as a designer, while building new relationships
        along the way. I hope to bring a blend of my front-end coding experience
        and user research perspectives to my design work. My goal is to redefine
        user friendly experiences and drive success through strategic digital
        practices.
      </p>

      <p className="about-text">
        I enjoy sewing, photography, and trying new coffee shops in my free
        time. I am from the DMV area, but open to traveling wherever design
        takes me! Please feel free to reach out to me, and let's create
        something amazing together!
      </p>
    </section>
  );
}

export default mainPageAboutSection;
