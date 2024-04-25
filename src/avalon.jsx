import React from "react";
import "./styles/1avalon.css";
import { useNavigate } from "react-router-dom";

function Avalon() {
  const navigate = useNavigate();

  const onGoToMainPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="avalonbanner">
        <img src="./res/Avalon banner.png" alt="Image 1" />
        <p>Digitization of the Quest: Avalon Board Game</p>
        <button className="arrow-container" onClick={onGoToMainPage}>
          <div className="arrow arrow-left"></div>
        </button>
      </div>
      <div className="intro-grid">
        <div>
          <h1 className="avalon">Overview</h1>
          <h4 className="avalon">
            "nolava" is a web app version of the popular board game, Quest:
            Avalon (Big Box Edition) that I created with my 4 developer/gamer
            friends. This app allows for different game logistics, including
            voting, role selection, and mission selection, to take place
            virtually for user convenience. We are in the progress of making it
            a fully digital game that allows for remote playing, but currently
            it is designed to be used in parallel with the original board game.
          </h4>
          <a
            href="https://avalon-cfacb.web.app/"
            target="_blank"
            className="avalonlink"
          >
            Try it out!
          </a>
        </div>
        <div className="problempic">
          <img src="./res/Avalon Problem.jpg"></img>
        </div>
      </div>

      <h2 className="avalon">Information Architecture</h2>
      <h3 className="avalon">
        To begin planning the layout of the application and where each feature
        would fit in, I created an application map to organize the screens in
        the most logical way for gameplay.
      </h3>
      <div className="avalonsitemap-container">
        <img src="./res/Sitemap - Avalon.jpg" className="sitemap"></img>
      </div>

      <h2 className="avalon">My Thinking Process</h2>
      <h3 className="avalon">
        I spent a lot of time with paper and pencil drawing out determining how
        we would create this app. I was hesitant at first because digitizing an
        old school board game would be challenging for people to adapt to. I
        wanted to ensure that the app wouldn't take away from the actual board
        game, but instead supplement it to make playing more efficient and
        convenient. If we had too many nuances, then people would be less
        inclined to use the app and just stick to the board game. Digital Avalon
        is designed similar to other online social games, such as Kahoot and
        Jackbox, where everyone joins the room through a QR code or game room
        link. This will make the app more likeable for users that have engaged
        in those games before.
      </h3>
      <div className="a-mockup">
        <div>
          <img src="./res/avalonsketch1.jpg"></img>
        </div>
        <div>
          <img src="./res/avalonsketch2.jpg"></img>
        </div>
      </div>
      <h2 className="avalon">Challenges</h2>
      <h3 className="avalon">
        One of the challenges we faced was deciding how we wanted to proceed
        with voting. Would the voting tab be visible for all players throughout
        the game or only king can send out the votes? Would there be a confirm
        button to allow player changes when voting or once a player decides, it
        generates it? Do results show up on everyone's screen or only king and
        they announce the results? We tested these different workflows to
        understand which would be most efficient for users by running a mockup
        round. After several back and forths, we decided to include a confirm
        button to allow for vote changes and king sending out votes popups.{" "}
      </h3>

      <h2 className="avalon">Mock-ups</h2>
      <h3 className="avalon">
        I created initial mockups on Canva, and throughout the process, our
        image of how we wanted the app designed changed. During the development
        process, we made different decisions on layout and I styled new mockups
        to match our vision.
      </h3>
      <h3 className="phasetitle">Initial</h3>
      <div className="mockuppic">
        <img src="./res/mockuppic.jpg" alt="" />
      </div>

      <h3 className="phasetitle">Final</h3>
      <div className="mockuppic">
        <img src="./res/mockuppic2.jpg" alt="" />
      </div>

      <h2 className="avalon">Features and Flexibility</h2>
      <h3 className="avalon">
        There is a toggle page that allows the admin to switch on and off which
        features they want to include, allowing variability for each game.
        Voting is default and cannot be turned off. Features that can be toggled
        include:
      </h3>
      <div className="togglegrid">
        <div>
          <ul className="avalonlist">
            <li>Role Selection</li>
            <li>Quest pass/fail</li>
            <li>Lady of the Lake</li>
          </ul>
        </div>
        <div>
          <img src="./res/togglepage.png" className="togglepic" />
        </div>
      </div>
    </div>
  );
}

export default Avalon;
