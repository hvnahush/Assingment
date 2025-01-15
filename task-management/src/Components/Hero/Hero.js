import React from 'react';
import './Hero.css';
import darkArrow from '../../Assets/dark-arrow.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'> 
        <h1>Organize Your Tasks, Maximize Your Productivity</h1>
        <p>Efficiently create, manage, and track your tasks with our easy-to-use task management system designed to boost your productivity and keep you on top of your goals.</p>
        <Link to='about' smooth={true} offset={-160} duration={500} className='btn'>
          Explore more <img src={darkArrow} alt='Arrow' />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
