import React from "react";
import "./styles/2calendar.css";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const navigate = useNavigate();

  const onGoToMainPage = () => {
    navigate("/");
  };

  return (
    <div>
      <div class="calendarbanner">
        <img src="./res/pacebanner.jpg" alt="Image 1" />
        <p>Health & Lifestyle Calendar App - Case Study</p>
        <button className="arrow-container" onClick={onGoToMainPage}>
          <div className="arrow arrow-left"></div>
        </button>
      </div>

      <div className="intro-grid">
        <div>
          <h1 className="calendar">Overview</h1>
          <h4 className="calendar">
            Pace is an app designed to allow individuals with busy schedules to
            build healthy routines without the need to remember when to perform
            different tasks. The app is built around a calendar, where you input
            activities, such as doctor visits, cardio, and even upper arm
            workouts along with the frequency of each activity. The calendar
            sends reminders when the user is due for that task again.
          </h4>
        </div>
        <div className="problempic">
          <img src="./res/Calendar Problem.jpg"></img>
        </div>
      </div>

      <h2 className="calendar">User Flow</h2>
      <h4 className="calendar">
        I wanted a simple user workflow to ensure the app would be minimalist
        and not time consuming for people to set up. Through only making a few
        decisions, individuals will have their calendars built out for full
        functioning.{" "}
      </h4>
      <h3 className="calendar"></h3>
      <div className="pacesitemap-container">
        <img src="./res/Sitemap - Health App.jpg" class="sitemap"></img>
      </div>

      <h2 className="calendar">My Thinking Process</h2>
      <h3 className="calendar">
        I have used several health and lifestyle apps to keep track of exercise
        goals, physical activities performed, weight loss goals, etc. I wanted
        to create an app that requires little to no time and effort for setting
        up, but still offering full flexibility. This app will allow users to
        track when they need to do cardio, core,weight lifting to stick to a
        routine. Users won't need to keep track of their doctor and dental
        check-ups either. Once they set up their last visit and how often they
        need to go, the calendar will automatically space out and create
        reminders when that time comes again.{" "}
      </h3>
      <div className="pacediagram">
        <img src="./res/pacediagram.jpg"></img>
      </div>
      <h2 className="calendar">Initial Sketches</h2>
      <h3 className="calendar">
        I always like to sketch out with pen and paper instead of jumping onto
        digital tools. These are my very low fidelity wireframe sketches to get
        an idea of how I want to layout the app.
      </h3>
      <div className="pace-mockup">
        <div>
          <img src="./res/pacesketch2.jpg"></img>
        </div>
        <div>
          <img src="./res/pacesketch1.jpg"></img>
        </div>
      </div>
      <h2 className="calendar">Prototype</h2>
    </div>
  );
}

export default Calendar;
