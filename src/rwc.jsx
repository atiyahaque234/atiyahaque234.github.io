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
      <a id="button"></a>
      <div className="rwcbanner">
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
        <img src="./res/Sitemap - RWC.jpg" className="sitemap"></img>
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
      <h3 className="rwc">
        I used actual images from the refugee program and created the online
        shop layout. I wanted to keep it simple with a few product categories
        and subcategories making it easy to navigate.
      </h3>
      <div className="rwcmockup-grid">
        <div className="mockup-text">
          <p>Try it out!</p>
          <a
            href="https://www.figma.com/proto/u3PQ7U2vvgpTQiuGbVLNtG/RWC-Online-Shop?type=design&node-id=33-2&t=MYNf9igzV6XXk7i6-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=33%3A2&mode=design"
            target="_blank"
          >
            <img src="./res/rwcmockup2.jpg" alt="" />{" "}
          </a>
        </div>
        <div>
          <img src="./res/rwcmockup6.jpg" alt="" />
        </div>
        <div>
          <img src="./res/rwcmockup5.jpg" alt="" />
        </div>
        <div>
          <img src="./res/rwcmockup4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default RWC;
