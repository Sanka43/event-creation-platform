import React, { useEffect, useState } from 'react';
import { ref, onValue } from "firebase/database";
import { database } from '../firebaseConfig'; // Ensure firebaseConfig is properly set up
import '../styles.css';
import Header from '../components/Header.js';

const FutureEvents = () => {
    const [events, setEvents] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState({});

    useEffect(() => {
        const fetchEvents = () => {
            const eventsRef = ref(database, "collection/events"); // Reference to "events" node
            onValue(eventsRef, (snapshot) => {
                const eventsData = snapshot.val();
                console.log("Fetched events data:", eventsData); // Debug log for Firebase data
                const eventsList = eventsData
                    ? Object.keys(eventsData).map((id) => ({ id, ...eventsData[id] }))
                    : [];
                setEvents(eventsList);
            });
        };

        fetchEvents(); // Fetch data on component mount
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTimeRemaining = {};
            events.forEach((event) => {
                const eventTime = new Date(event.date).getTime();
                const currentTime = Date.now();
                const diff = eventTime - currentTime;

                if (diff > 0) {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                    updatedTimeRemaining[event.id] = `${days}D ${hours}H ${minutes}M ${seconds}S`;
                } else {
                    updatedTimeRemaining[event.id] = "Event started or expired";
                }
            });
            setTimeRemaining(updatedTimeRemaining);
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on component unmount
    }, [events]);

    return (
        <div>
            <Header />
            <div className="events-container">
                <h1>Upcoming Events</h1>
                {events.length > 0 ? (
                events.map((event) => (
                    <div class="card" key={event.id}>
                        <div className='image'><img 
                            src={event.image || "https://via.placeholder.com/150"} 
                            alt={event.title || "Event Image"} 
                            className="event-image"/></div>
                        <div className="countdown">{timeRemaining[event.id] || "Calculating..."}</div>
                    <div class="content">                            <div class="word">On {event.date || "TBA"}</div>
                        <div class="word">At {event.time || "TBA"}</div>
                        <div class="word">Held at the {event.location || "TBA"}</div>
                    </div>
                    <div class="Description">Description: <br/> {event.description || "No description available."}</div>
                    <div><button>BOOK</button></div>
                    </div>
                    
                ))
            ) : (
                 <p>No upcoming events found.</p> // Fallback for no events
            )}
            </div>
        </div>
    );
};

export default FutureEvents;
