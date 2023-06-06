import React from 'react';
import './Home.css';
import Apple from '../../Assets/Apple_background.jpg';

const Home = () => {
  return (
    <div className='Home-container' id='Home' style={{ backgroundImage: `url(${Apple})`, backgroundSize: 'cover' }}>
      <div className='Home-Content'>
        <h1 className='Home-Title'>Felix Kabange</h1>
        <h2 className='Home-Subtitle'>Developer &amp; Designer</h2>
        <p className='Home-Description'>Born in Kinshasa, I am a passionate new developer who is dedicated to revolutionizing the industry with clean, efficient, and scalable code that leverages the latest technologies and best practices. I approach my work with meticulous attention to detail and a focus on achieving optimal efficiency without sacrificing accuracy. With a commitment to continuous learning and improvement, I am excited to create innovative solutions that make a positive impact on the world.</p>
      </div> 
    </div>
  );
};

export default Home;

