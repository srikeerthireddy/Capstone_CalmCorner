import React from "react";
import "./Home.css";
import { FaHeartbeat, FaUserFriends, FaBrain } from "react-icons/fa";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="home-image-container">
          <img src="https://www.makemebetter.net/wp-content/uploads/2021/06/MMB-IMAGE-JPG-8-2.jpg" alt="Mental wellness" className="home-background-image" />
          <div className="home-hero-content">
            <h1 className="home-hero-title">Your Mental Wellness Journey Starts Here</h1>
            <p className="home-hero-subtitle">Support, Resources, and Community for a Healthier Mind</p>
            <button className="home-cta-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home-about-section">
        <h2>Why Mental Health Matters</h2>
        <p className="home-about-paragraph">
          Mental health affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Taking care of your mental health is just as important as your physical health.
        </p>
        <div className="home-stats-container">
          <div className="home-stat-card">
            <h3>1 in 5</h3>
            <p>adults experience mental illness each year</p>
          </div>
          <div className="home-stat-card">
            <h3>50%</h3>
            <p>of all lifetime mental illness begins by age 14</p>
          </div>
          <div className="home-stat-card">
            <h3>46%</h3>
            <p>of Americans will meet criteria for a mental health condition</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services-section">
        <h2 className="home-heading">Our Services</h2>
        <div className="home-services-grid">
          <div className="home-service-card">
            <FaHeartbeat className="home-service-icon" />
            <h3>Self-Care Guidance</h3>
            <p>Tips and routines to help you care for your mental well-being.</p>
          </div>
          <div className="home-service-card">
            <FaUserFriends className="home-service-icon" />
            <h3>Community Support</h3>
            <p>Connect with others who understand your journey.</p>
          </div>
          <div className="home-service-card">
            <FaBrain className="home-service-icon" />
            <h3>Expert Resources</h3>
            <p>Access to articles and advice from mental health professionals.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials-section">
        <h2 className="home-heading">What Our Users Say</h2>
        <div className="home-testimonials-container">
          <div className="home-testimonial-card">
            <p>"This platform helped me find the right tools to manage my anxiety. I'm so grateful!"</p>
            <h4>— Alex</h4>
          </div>
          <div className="home-testimonial-card">
            <p>"Being able to connect with others going through similar challenges made all the difference."</p>
            <h4>— Jamie</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="home-cta-section">
        <h2>Start Your Journey Today</h2>
        <p>You’re not alone. Join our supportive community and take control of your mental well-being.</p>
        <div className="home-cta-buttons">
          <button className="home-cta-button">Join Now</button>
          <button className="home-secondary-button">Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
