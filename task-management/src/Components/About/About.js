import React from 'react';
import '../About/About.css';
import about_img from '../../Assets/about.jpg'; 

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt='About us' className='about-img'/>
      </div>
      <div className='about-right'>
        <h3>ABOUT TASK MANAGEMENT SYSTEM</h3>
        <h2>Streamline Your Workflow and Stay Organized!</h2>
        <p>Our task management system helps you stay on top of your projects and daily tasks. With an intuitive interface and powerful features, you can easily organize, prioritize, and track your tasks to ensure productivity and timely completion.</p>
        <p>Whether you're working on a team project or managing personal to-do lists, our platform offers flexible tools to help you categorize tasks, set deadlines, and monitor progress.</p>
        <p>Boost your efficiency and never miss a deadline again with our task management system—designed to simplify your workflow and keep you focused on what matters most.</p>
      </div>
    </div>
  );
};

export default About;
