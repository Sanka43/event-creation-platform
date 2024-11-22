import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import firebaseApp from '../firebaseConfig.js'; // Import Firebase app from the config file
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';
import facebook from '../assets/icons8-facebook-48.png';
import youtube from '../assets/youtube.png';
import Whatsapp from '../assets/icons8-whatsapp-48.png';
import x from '../assets/icons8-x-48.png';

const images = { facebook, youtube, Whatsapp, x };

const database = getDatabase(firebaseApp);

const HomePage = () => {
  const [events, setEvents] = useState([]); // State for event data
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/event'); // Navigate to the /event route
  };

  useEffect(() => {
    const dbRef = ref(database, 'users'); // Replace 'users' with your actual database path for events
    const listener = onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const eventArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setEvents(eventArray);
      }
    });

    // Cleanup listener on component unmount
    return () => off(dbRef, 'value', listener);
  }, []);

  return (
    <div className='body'>
      <Header />
      <div className='context'>
        <p className='slogen'>Create, Connect, Celebrate – Events Made Easy!</p>
        <h1 className='home-welcom'>Your Gateway to Seamless<br /> Event Planning</h1>
        <button type="button" className="button" onClick={handleNavigation}>
          <span className="fold"></span>
          <span className="inner">
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            >
              <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
            </svg>
            Event Hub
          </span>
        </button>
      </div>
      <div className='social-media'>
        <ul>
          <li><a href='https://www.facebook.com'><img src={images.facebook} alt="facebook" className='icon' /></a></li>
          <li><a href='https://www.youtube.com'><img src={images.youtube} alt="youtube" className='icon' /></a></li>
          <li><a href='https://www.whatsapp.com'><img src={images.Whatsapp} alt="whatsapp" className='icon' /></a></li>
          <li><a href='https://www.x.com'><img src={images.x} alt="X" className='icon' /></a></li>
        </ul>
      </div>
      {/* <div className='event-list'>
        {events.length > 0 ? (
          events.map((event) => (
            <div className='cards' key={event.id}>
              <div className='details'>
                <h1>{event.title}</h1>
                <p>{event.date}</p>
                <p>{event.time}</p>
                <button>BOOK</button>
              </div>
            </div>
          ))
        ) : (
          <p>No events available :( </p>
        )}
      </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;
