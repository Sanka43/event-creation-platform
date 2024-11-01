import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';
import facebook from '../assets/icons8-facebook-48.png';
import youtube from '../assets/youtube.png';
import Whatsapp from '../assets/icons8-whatsapp-48.png';
import x from '../assets/icons8-x-48.png';
import { useNavigate } from 'react-router-dom';


const images = { facebook, youtube, Whatsapp, x};


const HomePage = () => {

  const fb = 'facebook';
  const youtube = 'youtube';
  const Whatsapp = 'Whatsapp';
  const x = 'x';

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/event'); // Replace '/your-route' with your actual route
  };

  return (
    <div className='body'>
      <Header/>
        <div className='context'>
          <p className='slogen'>Create, Connect, Celebrate – Events Made Easy!</p>
          <h1 className='home-welcom'>Your Gateway to Seamless<br/> Event Planning</h1>
            <button type="button" class="button" onClick={handleNavigation}>
              <span class="fold"></span>

              <div class="points_wrapper">
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
                <i class="point"></i>
              </div>

              <span class="inner"
                ><svg
                  class="icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                >
                  <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline></svg>
                  Event Hub
                  </span>
            </button>
        </div>
        <div className='social-media'>
          <ul>
            <li><a href='www.facebook.com'><img src={images[fb]} alt="facebook" className='icon'/></a></li>
            <li><a href='www.youtube.com'><img src={images[youtube]} alt="youtube" className='icon' /></a></li>
            <li><a href='www.whatsapp.com'><img src={images[Whatsapp]} alt="whatsapp" className='icon' /></a></li>
            <li><a href='www.x.com'><img src={images[x]} alt="X" className='icon' /></a></li>
          </ul>
        </div>
        <div className='card-section'>

        </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
