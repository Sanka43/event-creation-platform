import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles.css';
import styled from 'styled-components';
import axios from 'axios';

const EventHub = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('date', date);
      formData.append('time', time);
      formData.append('location', location);
      formData.append('description', description);
      formData.append('image', image);

      try {
          await axios.post('/api/events', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
          // Reset form fields
          setTitle('');
          setDate('');
          setTime('');
          setLocation('');
          setDescription('');
          setImage(null);
      } catch (error) {
          console.error('Error uploading event:', error);
      }
  };

  return (
    <div className='event-body'>
      <Header/>
      <div className="event-hub">
      <form onSubmit={handleSubmit}>
      <h1>Create Event</h1>
      <StyledWrapper>
      <div className="form-control">
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
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
            textShadow: "0 0 0 #000",  // Display entered text in black
          }}
          value={date} onChange={(e) => setDate(e.target.value)} required />
        <label >
          <span style={{transitionDelay: "0ms"}}>D</span>
          <span style={{transitionDelay: "50ms"}}>a</span>
          <span style={{transitionDelay: "100ms"}}>t</span>
          <span style={{transitionDelay: "150ms"}}>e</span>
        </label>

        <input type="time" name="time" 
          style={{
            color: "transparent",  
          }}
          value={time} onChange={(e) => setTime(e.target.value)} required />
        <label >
          <span style={{transitionDelay: "0ms"}}>T</span>
          <span style={{transitionDelay: "50ms"}}>i</span>
          <span style={{transitionDelay: "100ms"}}>m</span>
          <span style={{transitionDelay: "150ms"}}>e</span>
        </label>

        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
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

        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
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

        <input type="url" name="image" value={image} onChange={(e) => setImage(e.target.value)} required />
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
