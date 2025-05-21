import React from "react";
import "./About.css";
import peace from "../images/peace.svg";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-hero-left">
          <h1>Welcome to Calm Corner</h1>
          <div className="tagline">Your sanctuary for mental wellbeing</div>
        </div>
        <div className="about-hero-right">
          <img src={peace} alt="Peace icon" className="peace-icon" />
        </div>
      </div>

      <div className="about-content">
        <section className="mission-section">
          <div className="section-text">
            <h2>Our Vision</h2>
            <p>
              A serene digital sanctuary dedicated to nurturing mental
              well-being and fostering a sense of inner peace. At Calm Corner,
              we understand the importance of prioritizing mental health in
              today's fast-paced world, and we're here to provide you with the
              tools, resources, and support you need to embark on your journey
              towards greater mental wellness.
            </p>
            <p>
              Our platform was born out of a shared vision to create a safe and
              inclusive space where individuals can explore, learn, and grow in
              their mental health journey. Whether you're looking to track your
              daily mood, monitor symptoms, or access a wealth of resources
              dedicated to mental wellness, Calm Corner is your go-to
              destination for all things related to mental health.
            </p>
          </div>
          <div className="section-image">
            <img
              src="https://img.freepik.com/premium-photo/illustration-human-brain-with-flowers-world-day-mental-physical-health-ai_564714-2939.jpg"
              alt="Mental Health Illustration"
              className="rounded-image"
            />
          </div>
        </section>

        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-icon">❋</div>
          <div className="divider-line"></div>
        </div>

        <section className="purpose-section">
          <div className="section-image">
            <img
              src="https://t3.ftcdn.net/jpg/05/70/90/46/360_F_570904658_ogDkDaBxoFvRFacVGfgf3yOktU1MDUzt.jpg"
              alt="Wellness Journey"
              className="rounded-image"
            />
          </div>
          <div className="section-text">
            <h2>Our Mission</h2>
            <p>
              Our mission at Calm Corner is simple yet profound: To empower
              individuals to take proactive steps towards managing their mental
              health and accessing the support they need. Whether you're seeking
              relaxation exercises, self-care tips, or simply a space to share
              your personal experiences, Calm Corner is here to support you
              every step of the way.
            </p>
            <p>
              Join us on this journey towards inner peace and well-being.
              Together, we can create a brighter, more compassionate world—one
              where mental health is valued, prioritized, and celebrated.
            </p>
          </div>
        </section>

        <div className="values-section">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💗</div>
              <h3>Compassion</h3>
              <p>
                We approach mental health with kindness, empathy, and
                understanding
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>
                We believe in the power of connection and shared experiences
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Accessibility</h3>
              <p>
                We strive to make mental health resources available to everyone
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Growth</h3>
              <p>We support continuous learning and personal development</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Start Your Journey Today</h2>
          <p>
            Join our community and discover resources to support your mental
            wellness
          </p>
          <button onClick={()=> navigate('/signup')} className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default About;
