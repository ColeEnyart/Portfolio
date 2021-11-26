import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigate() {
    return (
      <nav>
        <ul>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/work'>Work</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
        </ul>
      </nav>
    );
  }