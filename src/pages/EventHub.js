import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles.css';
import styled from 'styled-components';

const EventHub = () => {
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    description: '',
    image: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventDetails]);
    setEventDetails({
      title: '',
      date: '',
      time: '',
      location: '',
      description: '',
      image: ''
    });
  };

  return (
    <div className='event-body'>
      <Header/>
      <div className="event-hub">
      <form onSubmit={handleSubmit}>
      <h1>Create Event</h1>

      <StyledWrapper>
      <div className="form-control">
        <input type="text" name="title" value={eventDetails.title} onChange={handleInputChange} required />
        <label className='label1'>
          <span style={{transitionDelay: '0ms'}}>E</span>
          <span style={{transitionDelay: '50ms'}}>v</span>
          <span style={{transitionDelay: '100ms'}}>e</span>
          <span style={{transitionDelay: '150ms'}}>n</span>
          <span style={{transitionDelay: '200ms'}}>t</span>
          <span style={{transitionDelay: "200ms"}}></span>
          <span style={{transitionDelay: '250ms'}}>T</span>
          <span style={{transitionDelay: '300ms'}}>i</span>
          <span style={{transitionDelay: '350ms'}}>t</span>
          <span style={{transitionDelay: '400ms'}}>e</span>
        </label>
        
        <input type="date" name="date" 
          style={{
            color: "transparent",  // Hide placeholder color
            // textShadow: "0 0 0 #000",  // Display entered text in black
          }}
          value={eventDetails.date} onChange={handleInputChange} required />
        <label >
          <span style={{transitionDelay: "0ms"}}>D</span>
          <span style={{transitionDelay: "50ms"}}>a</span>
          <span style={{transitionDelay: "100ms"}}>t</span>
          <span style={{transitionDelay: "150ms"}}>e</span>
        </label>

        <input type="time" name="time" 
          style={{
            color: "transparent",  
            // textShadow: "0 0 0 #000",  
          }}
          value={eventDetails.time} onChange={handleInputChange} required />
        <label >
          <span style={{transitionDelay: "0ms"}}>T</span>
          <span style={{transitionDelay: "50ms"}}>i</span>
          <span style={{transitionDelay: "100ms"}}>m</span>
          <span style={{transitionDelay: "150ms"}}>e</span>
        </label>

        <input type="text" name="location" value={eventDetails.location} onChange={handleInputChange} required />
        <label>
          <span style={{transitionDelay: "0ms"}}>L</span>
          <span style={{transitionDelay: "100ms"}}>o</span>
          <span style={{transitionDelay: "150ms"}}>c</span>
          <span style={{transitionDelay: "200ms"}}>a</span>
          <span style={{transitionDelay: "250ms"}}>t</span>
          <span style={{transitionDelay: "300ms"}}>i</span>
          <span style={{transitionDelay: "350ms"}}>o</span>
          <span style={{transitionDelay: "400ms"}}>n</span>
        </label>

        <input type="text" name="description" value={eventDetails.description} onChange={handleInputChange} required />
        <label>
          <span style={{transitionDelay: "0ms"}}>D</span>
          <span style={{transitionDelay: "50ms"}}>i</span>
          <span style={{transitionDelay: "100ms"}}>s</span>
          <span style={{transitionDelay: "150ms"}}>c</span>
          <span style={{transitionDelay: "200ms"}}>r</span>
          <span style={{transitionDelay: "250ms"}}>i</span>
          <span style={{transitionDelay: "300ms"}}>p</span>
          <span style={{transitionDelay: "350ms"}}>t</span>
          <span style={{transitionDelay: "400ms"}}>i</span>
          <span style={{transitionDelay: "450ms"}}>o</span>
          <span style={{transitionDelay: "500ms"}}>n</span>
        </label>

        <input type="url" name="image" value={eventDetails.image} onChange={handleInputChange} required />
        <label>
          <span style={{transitionDelay: "0ms"}}>L</span>
          <span style={{transitionDelay: "50ms"}}>i</span>
          <span style={{transitionDelay: "100ms"}}>n</span>
          <span style={{transitionDelay: "150ms"}}>k</span>
          <span style={{transitionDelay: "200ms"}}></span>
          <span style={{transitionDelay: "250ms"}}>I</span>
          <span style={{transitionDelay: "300ms"}}>m</span>
          <span style={{transitionDelay: "350ms"}}>a</span>
          <span style={{transitionDelay: "400ms"}}>g</span>
          <span style={{transitionDelay: "450ms"}}>e</span>
          
        </label>

       

      </div>
      </StyledWrapper>
        <button type="submit">Create Event</button>
      </form>
      
      {/* <div className="event-list">
        <h2>Previwe</h2>
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.date} at {event.time}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            {event.image && <img src={event.image} alt={event.title} />}
          </div>
        ))}
      </div> */}
      </div>

    </div>
  );
};

const StyledWrapper = styled.div`
  .form-control {
    position: relative;
    margin: 0px 0 0px;
    line-height: 10px;
  }

  .form-control input {
    background-color: transparent;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    padding: 15px 0;
    font-size: 18px;
    color: #fff;
  }

  .form-control input:focus,
  .form-control input:valid {
    outline: 0;
    border-bottom-color: lightblue;
  }

  .form-control label {
    position: relative;
    bottom: 25px;
    left: 0;
    pointer-events: none;
    text-align: left; 
    padding-left: 0px; 
    display: inline-block;
    width: 100%;
    
  }

  .form-control label span {
    display: inline-block;
    font-size: 18px;
    min-width: 5px;
    color: #aaa;
    transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .form-control input:focus+label span,
  .form-control input:valid+label span {
    color: #fff;
    transform: translateY(-30px);
  }`;


export default EventHub;
