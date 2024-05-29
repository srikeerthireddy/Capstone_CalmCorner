// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import MoodEntry from '../WellnessHub/MoodEntry/MoodEntry';
import TrackMood from '../WellnessHub/TrackMood/TrackMood';
import Resources from '../WellnessHub/Resources/Resources';
import WellnessTips from '../WellnessHub/WellnessTips/WellnessTips';
import './Wellnesshub.css';

function Wellnesshub() {
  return (
    <div className="wellnesshub-container">
      <div className="wellnesshub-box">
        <div className="links-container">
          <div className="links">
            <NavLink to="mood" className={({ isActive }) => isActive ? "link-box active" : "link-box"}>MOOD ENTRY</NavLink>
            <NavLink to="track-mood" className={({ isActive }) => isActive ? "link-box active" : "link-box"}>TRACK MOOD</NavLink>
            <NavLink to="resources" className={({ isActive }) => isActive ? "link-box active" : "link-box"}>RESOURCES</NavLink>
            <NavLink to="wellness-tips" className={({ isActive }) => isActive ? "link-box active" : "link-box"}>WELLNESS TIPS</NavLink>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route index element={<MoodEntry />} />
            <Route path="mood" element={<MoodEntry />} />
            <Route path="track-mood" element={<TrackMood />} />
            <Route path="resources" element={<Resources />} />
            <Route path="wellness-tips" element={<WellnessTips />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Wellnesshub;
