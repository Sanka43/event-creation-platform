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
          <h1 className='home-welcom'>Your Gateway to Seamless Event Planning</h1>
          <p className='slogen'>Create, Connect, Celebrate – Events Made Easy!</p>
        </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
