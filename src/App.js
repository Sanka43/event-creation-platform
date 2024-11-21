import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventHub from './pages/EventHub';
import CountdownTimer from './pages/Upcomingevent';
import FutureEvents from './pages/FutureEvents';
// import CreateEventPage from './pages/CreateEventPage';
// import DashboardPage from './pages/DashboardPage';
// import ProfilePage from './pages/ProfilePage';
// import ReportsPage from './pages/ReportsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventHub />} />
        <Route path="/CountdownTimer" element={<CountdownTimer />} />
        <Route path="/FutureEvents" element={<FutureEvents />} />

        {/* <Route path="/dahboards" element={<DashboardPage />} />
         <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reports" element={<ReportsPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
