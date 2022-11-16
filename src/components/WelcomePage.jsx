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

      <div className='pocetnaStr'>
        
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
        <br /><br />
        <div className="flex-container-pocetna">
                        <div>
                            <h2 className='pocetna-div-naslov'>Pogodnosti</h2>
                            <hr className='pocetna-linija'/>
                            Zbogom čekanju u redovima, gužvama na šalterima ili pogrešnim brojevima telefona. Elektronska uprava vam omogućuje da veliki broj administrativnih poslova završite daleko komfornije iz svog doma, kancelarije, ili čak u pokretu, putem mobilnih uređaja, tako da vam ostaje više vremena za stvari koje su zaista bitne.
                        </div> 
                        
                        <div>
                            <h2 className='pocetna-div-naslov'>E-UPRAVA</h2>
                            <hr className='pocetna-linija'/>
                            Korišćenjem Portala građanima je olakšana komunikacija sa državnim organima i celokupnom javnom administracijom u smislu lakšeg pronalaženja informacija i odgovarajućih formulara, kao i jednostavnijeg podnošenja zahteva, prijema rešenja i ostalih dokumenata.
                        </div>
                        
                        <div >
                            <h2 className='pocetna-div-naslov'>Mogućnosti</h2>                            
                            <hr className='pocetna-linija'/>
                            Portal omogućava da se određeni postupci pred javnom upravom, koji su se do sada obavljali na šalteru, mogu obaviti i od kuće, odnosno bez fizičkog dolaska na šalter. Na njemu je aktivno gotovo milion korisnika, koji mogu da koriste 900 elektronskih usluga različitih državnih organa, što Portal stavlja u red najviše korišćenih i najposećenijih nacionalnih portala.
                        </div>
                     
             

            </div>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
};

export default Slideshow;