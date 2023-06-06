import React from 'react';
import './Project.css';
//import {images} from '../../Assets/importAll.jsx';
//import {Item} from '../Item/Item.jsx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Apple from '../../Assets/Apple_background.jpg';
import Gericht1 from '../../Assets/Gericht1.PNG';
import Gericht2 from '../../Assets/Gericht2.PNG';
import Gericht3 from '../../Assets/Gericht3.PNG';
import Gericht4 from '../../Assets/Gericht4.PNG';
import Gericht5 from '../../Assets/Gericht5.PNG';
import Gericht6 from '../../Assets/Gericht6.PNG';
import Gericht7 from '../../Assets/Gericht7.PNG';
import Gericht8 from '../../Assets/Gericht8.PNG';
import Gericht9 from '../../Assets/Gericht9.PNG';
import Gericht10 from '../../Assets/Gericht10.PNG';
import Gericht11 from '../../Assets/Gericht11.PNG';
import Gericht12 from '../../Assets/Gericht12.PNG';
import GptSample1 from '../../Assets/Gpt_sample1.jpg';
import GptSample2 from '../../Assets/Gpt_sample2.jpg';
import GptSample3 from '../../Assets/Gpt_sample3.jpg';
import GptSample4 from '../../Assets/Gpt_sample4.jpg';
import GptSample5 from '../../Assets/Gpt_sample5.jpg';
import Hoobank1 from '../../Assets/Hoobank1.PNG';
import Hoobank2 from '../../Assets/Hoobank2.PNG';
import Hoobank3 from '../../Assets/Hoobank3.PNG';
import Hoobank4 from '../../Assets/Hoobank4.PNG';
import Hoobank5 from '../../Assets/Hoobank5.PNG';
import Hoobank6 from '../../Assets/Hoobank6.PNG';
import Hoobank7 from '../../Assets/Hoobank7.PNG';
import YoutubeProject1 from '../../Assets/Youtube_project1.PNG';
import YoutubeProject2 from '../../Assets/Youtube_project2.PNG';


function Project() {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    centerMode: true
  };
//const Project = () => {
  return (
    <div className='Project' id='Project' style={{ backgroundImage: `url(${Apple})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#cccccc', textAlign: 'center' }}> 
      <h1 className='ProjectName'> Projects   </h1>
      <Slider {...settings}>
      <div className='images-original-size'>
      <img src={Gericht1} alt="Gericht1"  />  
      </div> 
      <div className='images-original-size'>
      <img src={Gericht2} alt="Gericht2"   />   
      </div>
      <div className='images-original-size'> 
      <img src={Gericht3} alt="Gericht3"   />   
      </div>
      <div className='images-original-size'>
      <img src={Gericht4} alt="Gericht4"   /> 
      </div>
      <div className='images-original-size'>
      <img src={Gericht5} alt="Gericht5"  />
      </div>
      <div className='images-original-size'>
      <img src={Gericht6} alt="Gericht6"  />
      </div>
      <div className='images-original-size'>
      <img src={Gericht7} alt="Gericht7"  />
      </div>
      <div className='images-original-size'>
      <img src={Gericht8} alt="Gericht8"   />
      </div>
      <div className='images-original-size'>
      <img  src={Gericht9} alt="Gericht9"   /> 
      </div>
      <div className='images-original-size'>
      <img src={Gericht10} alt="Gericht10"   />
      </div>
      <div className='images-original-size'>
      <img src={Gericht11} alt="Gericht11"   /> 
      </div>
      <div className='images-original-size'>
      <img src={Gericht12} alt="Gericht12"   />  
      </div>
      <div className='images-original-size'>
      <img src={GptSample1} alt="GptSample1"   /> 
      </div>
      <div className='images-original-size'>
      <img src={GptSample2} alt="GptSample2"   />
      </div>
      <div className='images-original-size'>
      <img src={GptSample3} alt="GptSample3"  />
      </div>
      <div className='images-original-size'>
      <img src={GptSample4} alt="GptSample4"   />
      </div>
      <div className='images-original-size'>
      <img src={GptSample5} alt="GptSample5"   />
      </div>
      <div className='images-original-size'>
      <img src={Hoobank1} alt="Hoobank1"   />
      </div>
      <div className='images-original-size'>
      <img src={Hoobank2} alt="Hoobank2"  /> 
      </div>
      <div className='images-original-size'>
      <img src={Hoobank3} alt="Hoobank3" />
      </div>
      <div className='images-original-size'>
      <img src={Hoobank4} alt="Hoobank4"  /> 
      </div>
      <div className='images-original-size'>
      <img src={Hoobank5} alt="Hoobank5" />
      </div>
      <div className='images-original-size'>
      <img src={Hoobank6} alt="Hoobank6"  />
      </div>
      <div className='images-original-size'>
      <img src={Hoobank7} alt="Hoobank7" />
      </div>
      <div className='images-original-size'>
      <img src={YoutubeProject1} alt="YoutubeProject1" /> 
      </div>
      <div className='images-original-size'>
      <img src={YoutubeProject2} alt="YoutubeProject2" />
      </div>
      </Slider> 
      <div className='description-container'> <p> "This is a collection of diverse projects that showcase various skills and technologies including React, Figma, UI8, Animista, Angrytools, Tailwind, and basic HTML/CSS. The projects range from a delicious food menu and a banking application to a GPT-3 text generation demonstration and a web application that uses the YouTube Data API to display videos." </p>  </div>
    </div>

  );
};

export default Project;