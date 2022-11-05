import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../components/WelcomePage.css';




const slideImages = [
  'https://source.unsplash.com/random/?office',
  'https://source.unsplash.com/random/?school',
 
];

const Slideshow = () => {
 




    return (

      <div>
        
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
             
            </div>
          </div>
 
        </Slide>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
};

export default Slideshow;