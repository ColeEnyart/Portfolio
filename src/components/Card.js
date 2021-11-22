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
        <img style={styles.img} src={Star} alt="Star Wars Quiz Website"></img>
        <a href="https://github.com/ColeEnyart/which-star-wars-character-are-you" target="blank"><div>Star Wars Quiz GitHub</div></a>
        <a href="https://coleenyart.github.io/which-star-wars-character-are-you/" target="blank"><div>Star Wars Quiz Website</div></a>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Weather} alt="Weather Dashboard Website"></img>
        <a href="https://github.com/ColeEnyart/weather-dashboard" target="blank"><div>Weather Dashboard GitHub</div></a>
        <a href="https://coleenyart.github.io/weather-dashboard/" target="blank"><div>Weather Dashboard Website</div></a>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Work} alt="Work Day Scheduler Website"></img>
        <a href="https://github.com/ColeEnyart/work-day-scheduler" target="blank"><div>Work Day Scheduler GitHub</div></a>
        <a href="https://coleenyart.github.io/work-day-scheduler/" target="blank"><div>Work Day Scheduler Website</div></a>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Northern} alt="Northern Health Tracker Website"></img>
        <a href="https://github.com/bretpeters3n/northern-health-tracker" target="blank"><div>Northern Health Tracker GitHub</div></a>
        <a href="https://northern-health-tracker2.herokuapp.com/" target="blank"><div>Northern Health Tracker Website</div></a>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Budget} alt="Online Offline Budget Tracker Website"></img>
        <a href="https://github.com/ColeEnyart/online-offline-budget-tracker" target="blank"><div>Online Offline Budget Tracker GitHub</div></a>
        <a href="https://coleenyart-budget-tracker.herokuapp.com/" target="blank"><div>Online Offline Budget Tracker Website</div></a>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Tech} alt="Tech Blog Website"></img>
        <a href="https://github.com/ColeEnyart/tech-blog" target="blank"><div>Tech Blog GitHub</div></a>
        <a href="https://coleenyart-tech-blog.herokuapp.com/" target="blank"><div>Tech Blog Website</div></a>
      </div>
    </div>
  );
}

export default Card;
