// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Map from './map';
import ChangeLanguage from './pages/ChangeLanguage';
import TrackMyTrain from './pages/TrackMyTrain';
import MedicalEmergency from './pages/MedicalEmergency';
import NearbyTransport from './pages/NearbyTransport';
import ReportIssue from './pages/ReportIssue';
import FeedbackPage from './pages/FeedbackPage';
import Home from './pages/Home'; // Import the Home component

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
            <Route path="/map" element={<Map />} />
            <Route path="/change-language" element={<ChangeLanguage />} />
            <Route path="/track-my-train" element={<TrackMyTrain />} />
            <Route path="/medical-emergency" element={<MedicalEmergency />} />
            <Route path="/nearby-transport" element={<NearbyTransport />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/FeedbackPage" element={<FeedbackPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
