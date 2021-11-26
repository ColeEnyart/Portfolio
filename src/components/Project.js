import React from 'react';
import Star from "../images/star-wars-quiz-updated.png";
import Weather from "../images/weather-dashboard.png";
import Work from "../images/work_day_scheduler.png";
import Northern from "../images/northern_health_tracker.png";
import Budget from "../images/budget-tracker.png";
import Tech from "../images/tech-blog.png";

const styles = {
  contain: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  project: {
    margin: '1em',
    background: '#cccccc',
  },
  img: {
    height: '15em',
    width: '20em',
    padding: '1em',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    background: '#a3a2a2',
  },
};

function Card() {
  return (
    <div style={styles.contain}>
      <div style={styles.project}>
        <img style={styles.img} src={Star} alt="Star Wars Quiz Website"></img>
        <h4>Star Wars Quiz</h4>
        <div style={styles.footer}>
          <a href="https://github.com/ColeEnyart/which-star-wars-character-are-you" target="blank"><div>GitHub</div></a>
          <a href="https://coleenyart.github.io/which-star-wars-character-are-you/" target="blank"><div>Website</div></a>
        </div>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Weather} alt="Weather Dashboard Website"></img>
        <h4>Weather Dashboard</h4>
        <div style={styles.footer}>
          <a href="https://github.com/ColeEnyart/weather-dashboard" target="blank"><div>GitHub</div></a>
          <a href="https://coleenyart.github.io/weather-dashboard/" target="blank"><div>Website</div></a>
        </div>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Work} alt="Work Day Scheduler Website"></img>
        <h4>Work Day Scheduler</h4>
        <div style={styles.footer}>
          <a href="https://github.com/ColeEnyart/work-day-scheduler" target="blank"><div>GitHub</div></a>
          <a href="https://coleenyart.github.io/work-day-scheduler/" target="blank"><div>Website</div></a>
        </div>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Northern} alt="Northern Health Tracker Website"></img>
        <h4>Northern Health Tracker</h4>
        <div style={styles.footer}>
          <a href="https://github.com/bretpeters3n/northern-health-tracker" target="blank"><div>GitHub</div></a>
          <a href="https://northern-health-tracker2.herokuapp.com/" target="blank"><div>Website</div></a>
        </div>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Budget} alt="Online Offline Budget Tracker Website"></img>
        <h4>Budget Tracker</h4>
        <div style={styles.footer}>
          <a href="https://github.com/ColeEnyart/online-offline-budget-tracker" target="blank"><div>GitHub</div></a>
          <a href="https://coleenyart-budget-tracker.herokuapp.com/" target="blank"><div>Website</div></a>
        </div>
      </div>

      <div style={styles.project}>
        <img style={styles.img} src={Tech} alt="Tech Blog Website"></img>
        <h4>Tech Blog</h4>
        <div style={styles.footer}>
          <a href="https://github.com/ColeEnyart/tech-blog" target="blank"><div>GitHub</div></a>
          <a href="https://coleenyart-tech-blog.herokuapp.com/" target="blank"><div>Website</div></a>
        </div>
      </div>
    </div>
  );
}

export default Card;
