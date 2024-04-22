import React from "react";
import "./styles/4rwc.css";
import { useNavigate } from "react-router-dom";

function RWC() {
  const navigate = useNavigate();

  const onGoToMainPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div class="rwcbanner">
        <img src="./res/rwcbanner.jpg" alt="Image 2" />
        <p>Sewing page redesign with online shop addition</p>
        <button className="arrow-container" onClick={onGoToMainPage}>
          <div className="arrow arrow-left"></div>
        </button>
      </div>
      <div className="intro-grid">
        <div>
          <h1 className="rwc">Overview</h1>
          <h4 className="rwc">
            The Refugee Women's Center (RWC) created a sewing program to aid its
            members socially and financially, by selling the handmade items at
            local fairs and markets. The website redesign included a more
            thorough layout to promote the sewing program, such as community
            photos and an events board to notify customers of upcoming locations
            these items will be sold at. Another feature added to this website
            was an online shop that will grow audience traffic and increased
            revenue by selling beyond the local region.{" "}
          </h4>
        </div>
        <div className="problempic">
          <img src="./res/RWC Problem.jpg"></img>
        </div>
      </div>

      <h2 className="rwc">Information Architecture</h2>
      <h3 className="rwc"></h3>
      <div className="sitemap-container">
        <img src="./res/Sitemap - RWC.jpg" class="sitemap"></img>
      </div>

      <h2 className="rwc">My Thinking Process</h2>
      <h3 className="rwc"></h3>
    </div>
  );
}

export default RWC;
