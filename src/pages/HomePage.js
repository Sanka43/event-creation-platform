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
          <h1 className='home-welcom'>Welcome to the Event Creation Platform</h1>
          <p className='slogen'>Create and manage events with ease.</p>
        </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
