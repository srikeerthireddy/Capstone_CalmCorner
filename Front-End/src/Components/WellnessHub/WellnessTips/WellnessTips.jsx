/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactPlayer from "react-player";
import "./WellnessTips.css";
function WellnessTips() {
  return (
    <div className="wellness-tips-container">
      <h1>Wellness Tips</h1>
      <div className="box articles-health">
        <h2 className="section-title">Mental Health Articles</h2>
        <div className="article-flex">
        <div className="article-card">
          <div className="image-tips">
            <img
              src="https://media.istockphoto.com/id/1319874358/vector/mental-health-medical-treatment.jpg?s=612x612&w=0&k=20&c=LoBwRcqLaTCPNq3d-pAaU8W9fsh8vpvAeGKMn7B9GTg="
              alt="Mental Health"
            />
          </div>
          <div className="article-content">
            <h3 className="article-title">Article-Mental Awarness</h3>
            <p className="article-text">The Importance of Mental Health Awarness.</p>
            <a href="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/" target="_blank" rel="noopener noreferrer">
                <button className="article-button">View</button>
              </a>
          </div>
        </div>
        <div className="article-card">
          <div className="image-tips">
            <img
              src="https://thumbs.dreamstime.com/b/lightbox-motivation-words-self-care-positive-thinking-mental-health-emotional-wellness-top-view-185218521.jpg"
              alt="Mental Health"
            />
          </div>
          <div className="article-content">
            <h3 className="article-title">Mental-Health WHO</h3>
            <p className="article-text">World Health Organization about Mental Health.</p>
            <a href="https://www.medicalnewstoday.com/articles/154543" target="_blank" rel="noopener noreferrer">
                <button className="article-button">View</button>
              </a>
          </div>
        </div>
        </div>
        <div className="article-flex">
        <div className="article-card">
          <div className="image-tips">
            <img
              src="https://www.voicesofyouth.org/sites/voy/files/images/2020-06/gettyimages-1044233906.jpg"
              alt="Mental Health"
            />
          </div>
          <div className="article-content">
            <h3 className="article-title">Mental Disorders</h3>
            <p className="article-text">World Health Organization about Mental-Health Disorders.</p>
            <a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" target="_blank" rel="noopener noreferrer">
                <button className="article-button">View</button>
              </a>
          </div>
        </div>
        <div className="article-card">
          <div className="image-tips">
            <img
              src="https://img.freepik.com/premium-photo/minimal-world-mental-health-day-poster-design_950002-110354.jpg"
              alt="Mental Health"
            />
          </div>
          <div className="article-content">
            <h3 className="article-title">Why Mental-Health is Important?</h3>
            <p className="article-text">Article of MedlinePlus how to improve mental health.</p>
            <a href="https://medlineplus.gov/howtoimprovementalhealth.html" target="_blank" rel="noopener noreferrer">
                <button className="article-button">View</button>
              </a>
          </div>
        </div>
        </div>
      </div>

      <div className="box well-tips">
        <h2>Relaxation Exercises</h2>
        <div className="video-flex">
          <div className="video-player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=z_JlCQOSI2A"
              controls
            />
          </div>
          <div className="video-player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=-izimqLkod8"
              controls
            />
          </div>
        </div>
        <div className="video-flex">
          <div className="video-player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=cyEdZ23Cp1E"
              controls
            />
          </div>
          <div className="video-player">
            <ReactPlayer
              url="https://youtu.be/COp7BR_Dvps?si=NDGDy-6dXQV0U06q"
              controls
            />
          </div>
        </div>
      </div>

      <div className="box self-care">
        <h2>Self-care Tips</h2>
        <div className="video-flex">
          <div className="video-player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=TflWjpVuA4w"
              controls
            />
          </div>
          <div className="video-player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=bARpudRvNgA"
              controls
            />
          </div>
        </div>
        <div className="video-flex">
          <div className="video-player">
            <ReactPlayer
              url="https://youtu.be/b_ZFjw-eEGo?si=dh5kAqBk3ARb4IW2"
              controls
            />
          </div>
          <div className="video-player">
            <ReactPlayer
              url="https://youtu.be/Z9bIMtQ-a78?si=hKswkxmX2kti8-S0"
              controls
            />
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default WellnessTips;
