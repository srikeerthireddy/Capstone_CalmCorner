// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link,Routes,Route} from 'react-router-dom';
import MoodEntry from '../WellnessHub/MoodEntry/MoodEntry';
import TrackMood from '../WellnessHub/TrackMood/TrackMood';
import Resources from '../WellnessHub/Resources/Resources';
import WellnessTips from '../WellnessHub/WellnessTips/WellnessTips';
import './Wellnesshub.css';
function Wellnesshub() {
  return (
    <div className='links'>
      <Link to="mood">MOOD ENTRY</Link>
      <Link to="track-mood">TRACK MOOD</Link>
      <Link to="resources">RESOURCES</Link>
      <Link to="wellness-tips">WELLNESS-TIPS</Link>
      <Routes>
        <Route index element={<MoodEntry/>}/>
        <Route path="mood" element={<MoodEntry/>}/>
        <Route path="track-mood" element={<TrackMood/>}/>
        <Route path="resources" element={<Resources/>}/>
        <Route path="wellness-tips" element={<WellnessTips/>}/>
      </Routes>
    </div>
  )
}

export default Wellnesshub
