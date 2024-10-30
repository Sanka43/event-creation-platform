// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

const HomePage = () => {
  return (
    <div className='body'>
      <Header/>
        <div className='context'>
          <p className='slogen'>Create, Connect, Celebrate – Events Made Easy!</p>
          <h1 className='home-welcom'>Your Gateway to Seamless<br/> Event Planning</h1>
          
            <button type="button" class="button">
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
                  Create Event
                  </span>
            </button>
        </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
