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
      <h3 className="rwc">
        I wanted to ensure the route for users to arrive at the sewing program
        info and the online shop is simple and straightforward, especially for
        individuals that are only looking for the online shop and do not need
        info on other content, such as the resource and volunteer links.
      </h3>
      <div className="rwcsitemap-container">
        <img src="./res/Sitemap - RWC.jpg" class="sitemap"></img>
      </div>

      <h2 className="rwc">Updates</h2>
      <h3 className="rwc">
        The Sewing Program page didn't have extensive info for users to learn. I
        included more written content and pictures that showcase what the
        program entails. I added pictures of handmade items by the online shop
        link, so individuals will know what to expect.
      </h3>
      <h3 className="rwc">
        Smaller updates were made to the page for overall smooth transitioning
        between links. There were redundant links that were removed, such as
        donate links to the donate page at the bottom of home page. The primary
        donate info is now under the donate tab.
      </h3>
      <div className="rwcmockup1">
        <img src="./res/rwcmockup1.jpg" alt="" />
      </div>

      <h2 className="rwc">Wireframing</h2>
      <h3 className="rwc">
        I sketched out the frame for how I want to design the online shop. I
        needed to approve the design by the program lead to ensure it meets
        their needs. After recieving approval on these sketches, I was able to
        create mockups and get to working on the shop itself.
      </h3>
      <div className="wireframe-grid">
        <div>
          <img src="./res/rwcwf1.png" alt="" />
        </div>
        <div>
          <img src="./res/rwcwf2.png" alt="" />
        </div>
      </div>
      <h2 className="rwc">Online Shop</h2>
    </div>
  );
}

export default RWC;
