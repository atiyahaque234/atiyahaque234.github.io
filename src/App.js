import React from "react";
import "./about.css";
import "./contact.css";
import "./project.css";
import "./resume.css";
import "./style.css";

function App() {
  return (
    <div>
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
          <a href="#resume" className="button-style">
            Resume
          </a>
          <a href="#contact" className="button-style">
            Contact
          </a>
        </nav>
      </div>

      <section id="home" className="home-body">
        <h1 className="hey-im-heading">Hey, I'm</h1>
        <div className="typing-container">
          <h2 className="name-heading">Atiya Haque</h2>

          <a href="#about" className="scroll-down" address="true">
            <span></span>
          </a>
        </div>
      </section>

      <section id="about">
        <h2 className="about-headers">Who Am I?</h2>
        <img className="aboutpic" src="./res/aboutme.jpg" />

        <p className="about-text">
          Hey there! I am a digital enthusiast, who is passionate about
          everything
          <span className="bold1"> Technology, </span>
          <span className="bold2"> User Experience, </span>and
          <span className="bold3"> Marketing. </span>
          My goal is to apply creativity in everything I do, while building new
          relationships along the way. I aim to redefine customer engagement and
          drive success through strategic digital practices.
        </p>

        <p className="about-text">
          I enjoy sewing, photography, and trying new coffee shops in my free
          time. If I sound interesting to you, please check my contact page to
          reach out to me!
        </p>
      </section>

      <section id="projects">
        <div className="project-headers">MY WORK</div>
        <div class="container">
          <div class="gallery">
            <figure class="gallery__item gallery__item--1">
              <a
                className="project-item"
                href="https://avalon-cfacb.web.app/"
                target="_blank"
              >
                <img
                  src="./res/avalonpic.png"
                  class="gallery__img"
                  alt="Image 1"
                />
                <p>Digital Avalon Board Game (UX/UI Designer)</p>{" "}
              </a>
            </figure>

            <figure class="gallery__item gallery__item--2">
              <a
                className="project-item"
                href="https://vinyltapmag.pages.wm.edu/"
                target="_blank"
              >
                <img
                  src="./res/Vinyl tap magazine.png"
                  class="gallery__img"
                  alt="Image 2"
                />
                <p>Vinyl Tap Magazine (Web Designer)</p>
              </a>
            </figure>

            <figure class="gallery__item gallery__item--3">
              <a
                className="project-item"
                href="https://www.wmbgradio.com/"
                target="_blank"
              >
                <img
                  src="./res/WMBG website.png"
                  class="gallery__img"
                  alt="Image 3"
                />{" "}
                <p>WMBG Radio Station (Web Designer)</p>
              </a>
            </figure>

            <figure class="gallery__item gallery__item--4">
              <a
                className="project-item"
                href="https://www.canva.com/design/DAE9mGxFgHw/7KltRF1OrSrFAJPzbXbkIQ/edit"
                target="_blank"
              >
                <img
                  src="./res/market research.jpg"
                  class="gallery__img"
                  alt="Image 4"
                />{" "}
                <p>Influencer Marketing Research</p>
              </a>
            </figure>

            <figure class="gallery__item gallery__item--5">
              <a
                className="project-item"
                href="https://www.canva.com/design/DAE8RqyMH6I/nlydGTEBOv7ypUCYiIUUYQ/edit"
                target="_blank"
              >
                <img
                  src="./res/brayschool.png"
                  class="gallery__img"
                  alt="Image 5"
                />
                <p>Marketing Strategy Project</p>
              </a>
            </figure>
          </div>
        </div>
      </section>

      <section id="resume">
        <h4 className="resume-headers">
          RESUME
          <a
            href="https://drive.google.com/file/d/1DEMvV-h7XbvbN78FIJnRZuLuqDv33g3T/view?usp=drive_link"
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
      </section>

      <section id="contact">
        <div className="contact-headers">Let's Stay in Touch!</div>

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
              https://www.linkedin.com/in/atiya-haque/
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
              https://github.com/atiyahaque234
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}

export default App;
