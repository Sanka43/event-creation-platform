import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventHub from './pages/EventHub';
// import CreateEventPage from './pages/CreateEventPage';
// import EventDetailsPage from './pages/EventDetailsPage';
// import DashboardPage from './pages/DashboardPage';
// import ProfilePage from './pages/ProfilePage';
// import ReportsPage from './pages/ReportsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event" element={<EventHub />} />
        {/*<Route path="/dahboards" element={<DashboardPage />} />
         <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/event/:id" element={<EventDetailsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reports" element={<ReportsPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
