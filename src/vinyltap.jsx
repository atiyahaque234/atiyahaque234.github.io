import React from "react";
import "./styles/3vinyltap.css";
import { useNavigate } from "react-router-dom";

function VinylTap() {
  const navigate = useNavigate();

  const onGoToMainPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div class="vinylbanner">
        <img src="./res/vinyltapbanner.jpg" alt="Image 1" />
        <p>Collaborative Spotify Playlist Enhancement</p>
        <button className="arrow-container" onClick={onGoToMainPage}>
          <div className="arrow arrow-left"></div>
        </button>
      </div>
      <div className="intro-grid">
        <div>
          <h1 className="vinyltap">Overview</h1>
          <h4 className="vinyltap">
            The Vinyl Tap website is designed for college students in the
            Williamsburg area, as a supplement to the Vinyl Tap Magazine, that
            enjoy connecting with other musically like-minded folks. The website
            was redesigned to include weekly Spotify playlists and upcoming
            shows/listening parties that allow users to know what others are
            listening to currently and stay connected. These playlists are
            curated by the Vinyl Tap staff and updated frequently with a social
            platform bringing students together to provide music reviews.
          </h4>
        </div>
        <div className="problempic">
          <img src="./res/Vinyl Tap Problem.jpg"></img>
        </div>
      </div>
      <h2 className="vinyltap">Information Architecture</h2>
      <h3 className="vinyltap">
        The gray boxes in the workflow are the external sites that were included
        with curated playlists. The dropdown from the digital content tab was
        our other focus to make the website easier to navigate with separate
        categories.
      </h3>
      <div className="vinylsitemap-container">
        <img src="./res/Sitemap - Vinyl Tap.jpg" class="sitemap"></img>
      </div>

      <h2 className="vinyltap">My Thinking & User Research</h2>
      <h3 className="vinyltap">
        Our users didn't feel very connected with our website. There wasn't a
        social and collaborative aspect to it, simply informing. We wanted to
        increase audience engagement, and through surveying students and
        receiving feedback, the inclusion of playlists where appropriate was the
        best way to acheieve this.
      </h3>
      <h3 className="vinyltap">
        We surveyed approximately 30 regular web users to determine what we
        could do to enhance our site. Questions included:
      </h3>
      <div>
        <ul className="vinyllist">
          <li>What aspect of the website do you engage with the most?</li>
          <li>
            What do you feel is missing from the website? More events?
            Information? Music? Reading content?{" "}
          </li>
          <li>
            How much time do you spend when visiting the Vinyl Tap Website?
          </li>
        </ul>
      </div>
      <h2 className="vinyltap">What changed?</h2>

      <h3 className="vinyltap">
        Content became more structured: drop down lists and consolidation. We
        wanted one place for all information, where people would be redirected
        from. According to the surveys, our users spent on average 8 minutes on
        the website at one time. This meant we couldn't spread our important
        information out too much. Creating pages like this would keep our
        audience more focused:
      </h3>

      <div className="vinylmockuppic">
        <img src="./res/vinylmockup1.jpg" alt="" />
      </div>
      <h2 className="vinyltap">Mock Ups</h2>
      <h3 className="vinyltap">
        Pages showing the curated playlists that appear at bottom of home page.
        Similarly, each staff article that headlines provides songs that
        correlate with the written content.
      </h3>
      <div className="vinylmockuppic2">
        <img src="./res/vinylmockup2.jpg" alt="" />
      </div>
    </div>
  );
}

export default VinylTap;
