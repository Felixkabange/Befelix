import React from 'react';
import './Info.css';
import Apple from '../../Assets/Apple_background.jpg';

const Info = () => {
  return (
    <div className='Info' id='Info' style={{ backgroundImage: `url(${Apple})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#cccccc', textAlign: 'center' }}>
      <div className='Info-content' style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: "'Architects Daughter', cursive", fontSize: '50px', lineHeight: '60px' }}>Felix Kabange</h1>
        <h2 style={{ fontFamily: "'Architects Daughter', cursive", fontSize: '21px' }}>Front End Developer</h2>
        <br />
        <p className="Home-Content" style={{ fontFamily: "'Satisfy', cursive", fontSize: '28px', lineHeight: '1.6' }}>I am a passionate front end developer who is looking for my first job. I have experience in HTML, CSS, JavaScript, React and other front end technologies. I am dedicated to creating clean, efficient, and scalable code that leverages the latest technologies and best practices. With a commitment to continuous learning and improvement, I am excited to create innovative solutions that make a positive impact on the world. I am proficient in both English and French.</p>
        <br />
        <p style={{ fontFamily: "'Satisfy', cursive", fontSize: '28px', lineHeight: '1.6' }}>You can find me on:</p>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li style={{ fontFamily: "'Satisfy', cursive", fontSize: '28px', lineHeight: '1.6' }}><a href='https://twitter.com/fellykabange?s=21&t=PCI42pGmSx0tWiCnd_vdaQ' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
          <li style={{ fontFamily: "'Satisfy', cursive", fontSize: '28px', lineHeight: '1.6' }}><a href='https://instagram.com/felix_kabange?igshid=YmMyMTA2M2Y=' target='_blank' rel='noopener noreferrer'>Instagram</a></li>
          <li style={{ fontFamily: "'Satisfy', cursive", fontSize: '28px', lineHeight: '1.6' }}><a href='http://linkedin.com/in/felix-kabange-892a411b3' target='_blank' rel='noopener noreferrer'>LinkedIn</a></li>
          <li style={{ fontFamily: "'Satisfy', cursive", fontSize: '28px', lineHeight: '1.6' }}><a href='https://github.com/Felixkabange/' target='_blank' rel='noopener noreferrer'>GitHub</a></li>
          <li style={{ fontFamily: "'Satisfy', cursive", fontSize: '28px', lineHeight: '1.6' }}>Email: Kabangefelly@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Info;

