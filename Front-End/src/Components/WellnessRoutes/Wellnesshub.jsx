// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import MoodEntry from "../WellnessHub/MoodEntry/MoodEntry";
import TrackMood from "../WellnessHub/TrackMood/TrackMood";
import Resources from "../WellnessHub/Resources/Resources";
import WellnessTips from "../WellnessHub/WellnessTips/WellnessTips";
import UpdateRender from "../WellnessHub/UpdateEntry/UpdateEntry";

function Wellnesshub() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)]">
      <div className="flex flex-col flex-1 ">
        <div className="bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)] border-b border-slate-200 p-4">
          <div className="flex justify-center gap-4">
            <NavLink
              to="mood"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              MOOD ENTRY
            </NavLink>
            <NavLink
              to="track-mood"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              TRACK MOOD
            </NavLink>
            <NavLink
              to="resources"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              RESOURCES
            </NavLink>
            <NavLink
              to="wellness-tips"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              WELLNESS TIPS
            </NavLink>
          </div>
        </div>
        <div className="flex-1 p-8 ">
          <Routes>
            <Route index element={<MoodEntry />} />
            <Route path="mood" element={<MoodEntry />} />
            <Route path="track-mood" element={<TrackMood />} />
            <Route path="resources" element={<Resources />} />
            <Route path="wellness-tips" element={<WellnessTips />} />
            <Route path="update" element={<UpdateRender />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Wellnesshub;
