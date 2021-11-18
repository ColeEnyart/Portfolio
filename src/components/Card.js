import React from 'react';
import Star from "./images/star-wars-quiz-updated.png";
import Weather from "./images/weather-dashboard.png";
import Work from "./images/work_day_scheduler.png";

const styles = {
  card: {
    margin: 20,
    background: '#242424',
    height: '200px',
  },
  img: {
    height: '200px',
  },
};

function Card() {
  return (
    <div>
      <div style={styles.card}>
        <a href="https://github.com/ColeEnyart/which-star-wars-character-are-you" target="blank">
        <img style={styles.img} src={Star} alt="Star Wars Quiz Website"></img>
        <div class="centered">Star Wars Quiz</div>
        </a>
      </div>

      <div style={styles.card}>
        <a href="https://github.com/ColeEnyart/weather-dashboard" target="blank">
        <img style={styles.img} src={Weather} alt="Weather Dashboard Website"></img>
        <div class="centered">Weather Dashboard</div>
        </a>
      </div>

      <div style={styles.card}>
        <a href="https://github.com/ColeEnyart/work-day-scheduler" target="blank">
        <img style={styles.img} src={Work} alt="Work Day Scheduler Website"></img>
        <div class="centered">Work Day Scheduler</div>
        </a>
      </div>
    </div>
  );
}

export default Card;
