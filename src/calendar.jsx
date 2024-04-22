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
      <div className="calendarsitemap-container">
        <img src="./res/Sitemap - Health App.jpg" class="sitemap"></img>
      </div>

      <h2 className="calendar">My Thinking Process</h2>
      <h3 className="calendar"></h3>
    </div>
  );
}

export default Calendar;
