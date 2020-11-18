import React from 'react';
import { Footer } from '../styles/HomeStyle';
import Company1 from '../assets/images/Company1.png';
import Company2 from '../assets/images/Company2.png';
import Company3 from '../assets/images/Company3.png';
import Company4 from '../assets/images/Company4.png';
import Company5 from '../assets/images/Company5.png';
import Company6 from '../assets/images/Company6.png';
import Company7 from '../assets/images/Company7.png';
import socials from '../assets/images/socials.PNG';
import WhatApp from '../assets/images/whatsapp_us.PNG';
function HomeFooter(props) {
  return (
    <Footer>
      <p>No 1 Bulk Sms Service Provider In Nigeria To All Networks Including</p>
      <p>DND Numbers</p>
      <p>No Extra Cost! No Hidden Charges !</p>
      <p className="larger_text">Register Now</p>
      <p className="black">Some Of Our Clients</p>
      <img src={WhatApp} alt="whatsapp" className="whatsapp" />
      <div>
        <div className="img_container">
          <img src={Company1} alt="compny logo" />
        </div>
        <div className="img_container">
          <img src={Company2} alt="compny logo" />
        </div>
        <div className="img_container">
          <img src={Company3} alt="compny logo" />
        </div>
      </div>
      <div>
        <div className="img_container">
          <img src={Company4} alt="compny logo" />
        </div>
        <div className="img_container">
          <img src={Company5} alt="compny logo" />
        </div>
        <div className="img_container">
          <img src={Company6} alt="compny logo" />
        </div>
        <div className="img_container">
          <img src={Company7} alt="compny logo" />
        </div>
      </div>
      <footer>
        <img src={socials} alt="socials" />
        <p>
          Address: 91, St,Finbbar’s Road Tel: 09038929480 Email:
          zariconnect@gmail.com
        </p>
      </footer>
    </Footer>
  );
}

export default HomeFooter;
