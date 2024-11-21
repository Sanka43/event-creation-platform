import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { database } from '../firebaseConfig'; // Correctly importing the database
import '../styles.css';
import Header from '../components/Header.js';

const FutureEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = () => {
            const eventsRef = ref(database, "events"); // Reference to "events" node
            onValue(eventsRef, (snapshot) => {
                const eventsData = snapshot.val();
                const eventsList = eventsData
                    ? Object.keys(eventsData).map((id) => ({ id, ...eventsData[id] }))
                    : [];
                setEvents(eventsList);
            });
        };

        fetchEvents(); // Fetch data on component mount
    }, []);

    return (
        <div>
            <Header />
            <div className="events-container">
                {events.map((event) => (
                    <div className="event-card" key={event.id}>
                        <img src={event.image} alt={event.title} />
                        <h2>{event.title}</h2>
                        <p>Date & Time: {event.dateTime}</p>
                        <p>Location: {event.location}</p>
                        <p>Description: {event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FutureEvents;
