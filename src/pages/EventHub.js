import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles.css';

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
    <div className="event-hub">
        <Header/>
      <h1>Create Event</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Event Title" value={eventDetails.title} onChange={handleInputChange} required />
        <input type="date" name="date" value={eventDetails.date} onChange={handleInputChange} required />
        <input type="time" name="time" value={eventDetails.time} onChange={handleInputChange} required />
        <input type="text" name="location" placeholder="Location" value={eventDetails.location} onChange={handleInputChange} required />
        <textarea name="description" placeholder="Description" value={eventDetails.description} onChange={handleInputChange} required />
        <input type="url" name="image" placeholder="Image URL" value={eventDetails.image} onChange={handleInputChange} />
        <button type="submit">Create Event</button>
      </form>
      
      <div className="event-list">
        <h2>Upcoming Events</h2>
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <h3>{event.title}</h3>
            <p>{event.date} at {event.time}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            {event.image && <img src={event.image} alt={event.title} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventHub;
