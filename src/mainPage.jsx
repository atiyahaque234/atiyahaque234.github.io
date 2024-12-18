import React from "react";
import "./styles/contact.css";
import "./styles/project.css";
import "./styles/resume.css";
import "./styles/style.css";
import { useNavigate } from "react-router-dom";
import mainPageAboutSection from "./mainPageAboutSection";

function MainPage() {
  const navigate = useNavigate();
  const onAvalonClick = () => {
    navigate("/avalon");
  };

  const onCalendarClick = () => {
    navigate("/calendar");
  };

  const onVinylTapClick = () => {
    navigate("/vinyltap");
  };

  const onRWCClick = () => {
    navigate("/rwc");
  };

  return (
    <div>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Edu+AU+VIC+WA+NT+Arrows:wght@400..700&family=Hachi+Maru+Pop&family=Orbitron:wght@400..900&display=swap');
      </style>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&family=Edu+AU+VIC+WA+NT+Arrows:wght@400..700&display=swap');
      </style>

      <div className="initials-container">AH</div>
      <div className="buttons-container">
        <nav>
          <a href="#home" className="button-style">
            Home
          </a>
          <a href="#about" className="button-style">
            About
          </a>
          <a href="#projects" className="button-style">
            Projects
          </a>

          <a href="#contact" className="button-style">
            Contact
          </a>
        </nav>
      </div>

      <section id="home" className="home-body">
        <h1 className="hey-im-heading">ATIYA HAQUE</h1>
        <div className="typing-container">
          <h2 className="name-heading">Designer</h2>

          <a href="#about" className="scroll-down" address="true">
            <span></span>
          </a>
        </div>
      </section>

      {mainPageAboutSection()}

      <section id="projects">
        <div className="project-headers">FEATURED WORK</div>
        <div className="container">
          <div className="gallery">
            <div className="overlay">
              <img
                src="./res/avalongraphic.jpg"
                className="gallery__img"
                alt="Image 1"
              />
              <p>
                Developed interactive web application to enhance board game
                experience with supplemental features, including voting and role
                selection, or full digital gameplay
              </p>
              {/* <a href="https://avalon-cfacb.web.app/" target="_blank"> */}
              <button onClick={onAvalonClick} className="bn30">
                Check It Out
              </button>{" "}
              {/* </a> */}
            </div>
            <div className="roletitle">
              {" "}
              <p>Avalon Board Game</p>
              <p>
                <small>
                  <em>Role:</em> UX/UI Designer, Front-End Developer
                </small>
              </p>
              <p></p>
            </div>
          </div>
          <div className="gallery">
            <div className="overlay">
              <img
                src="./res/calendar.jpg"
                className="gallery__img"
                alt="Image 2"
              />
              <p>
                Designed lifestyle app to track health activities in calendar
                format
              </p>{" "}
              <button onClick={onCalendarClick} className="bn30">
                Check It Out
              </button>{" "}
            </div>
            <div className="roletitle">
              <p>Pace</p>
              <p>
                <small>
                  <em>Role:</em> UX Designer
                </small>
              </p>
            </div>
          </div>

          <div className="gallery">
            <div className="overlay">
              <img
                src="./res/vinylgraphic.jpg"
                className="gallery__img"
                alt="Image 2"
              />
              <p>
                Built mock-ups and collaborative addition for digital music
                magazine designed for college community to explore multimedia
                content
              </p>
              <button onClick={onVinylTapClick} className="bn30">
                Check It Out{" "}
              </button>{" "}
            </div>
            <div className="roletitle">
              <p>Vinyl Tap Magazine</p>
              <p>
                <small>
                  <em>Role:</em> Web Designer{" "}
                </small>
              </p>
            </div>
          </div>

          <div className="gallery">
            <div className="overlay">
              <img
                src="./res/rwcgraphic.jpg"
                className="gallery__img"
                alt="Image 4"
              />
              <p>
                Enhancing website platform promoting social programs and support
                for female refugees with addition of online shop and events
                board
              </p>{" "}
              <button onClick={onRWCClick} className="bn30">
                Check It Out
              </button>{" "}
            </div>
            <div className="roletitle">
              <p>Refugee Women's Center</p>
              <p>
                <small>
                  <em>Role:</em> Web Designer{" "}
                </small>
              </p>
            </div>
          </div>

          <div className="gallery">
            <div className="overlay">
              <img
                src="./res/influencergraphic.jpg"
                className="gallery__img"
                alt="Image 4"
              />
              <p>
                Conducted market research to understand difference between macro
                and micro influencers and provided growth strategy
              </p>{" "}
              <a
                href="https://www.canva.com/design/DAE9mGxFgHw/7KltRF1OrSrFAJPzbXbkIQ/edit"
                target="_blank"
              >
                <button className="bn30">Check It Out</button>{" "}
              </a>
            </div>
            <div className="roletitle">
              {" "}
              <p>Influencer Case Study</p>
              <p>
                <small>
                  <em>Role:</em> User Researcher{" "}
                </small>
              </p>
            </div>
          </div>
          <div className="gallery">
            <div className="overlay">
              <img
                src="./res/braygraphic.jpg"
                className="gallery__img"
                alt="Image 5"
              />
              <p>
                Created strategy analysis and promotional materials to increase
                awareness for cultural institution
              </p>{" "}
              <a
                href="https://www.canva.com/design/DAE8RqyMH6I/nlydGTEBOv7ypUCYiIUUYQ/edit"
                target="_blank"
              >
                <button className="bn30">Check It Out</button>{" "}
              </a>
            </div>
            <div className="roletitle">
              {" "}
              <p>Bray School Lab Case Study</p>
              <p>
                <small>
                  <em>Role:</em> Graphic Designer{" "}
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="resume">
        <h4 className="resume-headers">
          RESUME
          <a
            href="https://drive.google.com/file/d/15KZ-zGC-s16Mxbrx-6I29cIPe-6BiOvH/view"
            target="_blank"
          >
            <img className="open-resume" src="./res/open-resume.png" />
          </a>
        </h4>

        <div className="grid-container">
          <div className="resumeCol">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h6>William & Mary</h6>

              <em>B.S. Psychology, Marketing Minor</em>

              <h5>2018 - 2022</h5>
              <p>
                <strong>Relevant Coursework: </strong> Principles of Marketing,
                Advertising & Digital Marketing, Diversity in the Workplace
              </p>
            </div>
            <b></b>

            <h3 className="resume-title">Skills</h3>

            <div className="resume-item">
              <div className="grid-skills">
                <div className="h15">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Data Analytics</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>User Testing</li>
                    <li>Wireframing</li>
                    <li>Research</li>
                    <li>SEO</li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="resume-title">Applications</h3>
            <div className="resume-item">
              <div className="grid-skills">
                <div className="h15">
                  <ul>
                    <li>Figma</li>
                    <li>Microsoft Office</li>
                    <li>Adobe Photoshop</li>
                    <li>Adobe Illustrator</li>
                    <li>HubSpot</li>
                  </ul>
                </div>
                <div className="skill-list">
                  <ul>
                    <li>Visual Studio Code</li>
                    <li>Sketch</li>
                    <li>Canva</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
              </div>
            </div>
            <h3 className="resume-title">Certifications</h3>
            <div className="resume-item">
              <div className="h15">
                <ul>
                  <li>Principles of UX/UI Design - Meta</li>
                  <li>Product Design - Udacity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resumeCol">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h6>EPIC SYSTEMS</h6>
              <em>Project Manager</em>
              <h5>2022 - 2024</h5>
              <ul>
                <li>
                  Implement Epic’s Revenue software; emphasizing meticulous
                  customization and system integration
                </li>
                <li>
                  Foster strategic partnerships with key stakeholders,
                  collaborating with cross-functional teams
                </li>
                <li>
                  Conduct extensive system end user testing to ensure
                  efficiency, convenience, and compliance
                </li>
                <li>
                  Enhanced Epic’s internal knowledge base by updating and
                  creating Wikipedia pages using HTML
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h6>W&M STUDIO FOR TEACHING & LEARNING INNOVATION</h6>

              <em>Educational Media Production Assistant</em>

              <h5>2020 - 2022</h5>
              <ul>
                <li>
                  Designed weekly promotional content for website and emails to
                  reach 600+ faculty members
                </li>
                <li>
                  Analyzed user interaction and feedback with digital platforms,
                  driving content strategy through surveying and data analysis
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h6>WCWM RADIO STATION</h6>

              <em>Web Designer</em>

              <h5>2019 - 2022</h5>
              <ul>
                <li>
                  Strategically planned and managed WCWM daily website
                  operations, publishing online material to attract a 50% larger
                  audience over 6 months
                </li>
                <li>
                  Organized and updated show schedules, director info, events
                  and radio content weekly to inform listeners
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h6>VINYL TAP MAGAZINE</h6>

              <em>Web/Print Content Designer</em>
              <h5>2019 - 2022</h5>
              <ul>
                <li>
                  Utilized Figma for design prototypes and Photoshop for image
                  editing and graphic design
                </li>
                <li>
                  Researched current trends in artists and album releases to
                  publish on digital platforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      <section id="contact">
        <div className="contact-headers">LET'S STAY IN TOUCH!</div>

        <div className="contact-icon-item">
          <div className="contact-icons">
            <img src="./res/email-icon.png" />
          </div>

          <p className="contact-text">atiya234@gmail.com</p>
        </div>

        <div className="contact-icon-item">
          <div className="contact-icons-phone">
            <img src="./res/phone-icon.png" alt="Emoji Description" />
          </div>

          <span className="contact-text">571-233-1151</span>
        </div>
        <div className="contact-icon-item">
          <a href="https://www.linkedin.com/in/atiya-haque" target="_blank">
            <div className="contact-icons-linkedin">
              <img src="./res/linkedin-icon.png" alt="Emoji Description" />
            </div>
          </a>

          <span className="contact-text">
            <a
              className="url-color"
              href="https://www.linkedin.com/in/atiya-haque"
            >
              LinkedIn
            </a>
          </span>
        </div>

        <div className="contact-icon-item">
          <a href="https://github.com/atiyahaque234" target="_blank">
            <div className="contact-icons-github">
              <img
                src="./res/github-logo.png"
                alt="Emoji Description"
                style={{ filter: "brightness(100%)" }}
              />
            </div>
          </a>
          <span className="contact-text">
            <a className="url-color" href="https://github.com/atiyahaque234">
              Github
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}

export default MainPage;
