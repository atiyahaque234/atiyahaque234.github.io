import React from "react";
import "./styles/about.css";

function mainPageAboutSection() {
  return (
    <section id="about">
      <h2 className="about-headers">Who Am I?</h2>
      <img className="aboutpic" src="./res/aboutme.jpg" />

      <p className="about-text">
        Hey there! I am a digital enthusiast, who is passionate about
        everything&nbsp;
        <span className="bold1">Technology</span>,&nbsp;
        <span className="bold2">User Experience</span>, and&nbsp;
        <span className="bold3">Marketing</span>. My goal is to apply creativity
        in everything I do, while building new relationships along the way. I
        aim to redefine customer engagement and drive success through strategic
        digital practices.
      </p>

      <p className="about-text">
        I enjoy sewing, photography, and trying new coffee shops in my free
        time. If I sound interesting to you, please check my contact page to
        reach out to me!
      </p>
    </section>
  );
}

export default mainPageAboutSection;
