import React from 'react';
import Star from "./images/star-wars-quiz-updated.png";
import Weather from "./images/weather-dashboard.png";
import Work from "./images/work_day_scheduler.png";
import Northern from "./images/northern_health_tracker.png";
import Budget from "./images/budget-tracker.png";
import Tech from "./images/tech-blog.png";

const styles = {
  contain: {
    display: 'flex',
    height: '20em',
  },
  project: {
    margin: '1em',
    background: '#242424',
    height: '10em',
    width: '10em',
  },
  img: {
    height: '100%',
    width: '100%',
  },
};

function Card() {
  return (
    <div style={styles.contain}>
      <div style={styles.project}>
        <a href="https://github.com/ColeEnyart/which-star-wars-character-are-you" target="blank">
        <img style={styles.img} src={Star} alt="Star Wars Quiz Website"></img>
        <div>Star Wars Quiz</div>
        </a>
      </div>

      <div style={styles.project}>
        <a href="https://github.com/ColeEnyart/weather-dashboard" target="blank">
        <img style={styles.img} src={Weather} alt="Weather Dashboard Website"></img>
        <div>Weather Dashboard</div>
        </a>
      </div>

      <div style={styles.project}>
        <a href="https://github.com/ColeEnyart/work-day-scheduler" target="blank">
        <img style={styles.img} src={Work} alt="Work Day Scheduler Website"></img>
        <div>Work Day Scheduler</div>
        </a>
      </div>

      <div style={styles.project}>
        <a href="https://github.com/ColeEnyart/northern-health-tracker" target="blank">
        <img style={styles.img} src={Northern} alt="Northern Health Tracker Website"></img>
        <div>Northern Health Tracker</div>
        </a>
      </div>

      <div style={styles.project}>
        <a href="https://github.com/ColeEnyart/online-offline-budget-tracker" target="blank">
        <img style={styles.img} src={Budget} alt="Online Offline Budget Tracker Website"></img>
        <div>Online Offline Budget Tracker</div>
        </a>
      </div>

      <div style={styles.project}>
        <a href="https://github.com/ColeEnyart/tech-blog" target="blank">
        <img style={styles.img} src={Tech} alt="Tech Blog Website"></img>
        <div>Tech Blog</div>
        </a>
      </div>
    </div>
  );
}

export default Card;
