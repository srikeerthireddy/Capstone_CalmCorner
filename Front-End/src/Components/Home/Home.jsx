import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="image-container">
          <img 
            src="https://www.makemebetter.net/wp-content/uploads/2021/06/MMB-IMAGE-JPG-8-2.jpg" 
            alt="Person meditating peacefully" 
            className="background-image"
          />
          <div className="hero-content">
            <h1 className="hero-title">You are resilient, you are unstoppable</h1>
            <p className="hero-subtitle">Your mental health journey matters</p>
            <button className="cta-button">Get Support Now</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <h2>Your Mental Wellbeing Matters</h2>
        <p>We provide resources, support, and community to help you navigate life's challenges and build resilience. Everyone deserves access to mental health care that's compassionate, effective, and personalized.</p>
        
        <div className="stats-container">
          <div className="stat-card">
            <h3>1 in 5</h3>
            <p>Adults experience mental health challenges each year</p>
          </div>
          <div className="stat-card">
            <h3>50%</h3>
            <p>Of mental health conditions begin by age 14</p>
          </div>
          <div className="stat-card">
            <h3>80%</h3>
            <p>Of people can recover with proper support</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>How We Can Help</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3>Therapy Resources</h3>
            <p>Connect with licensed therapists and counselors who specialize in different mental health concerns.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📚</div>
            <h3>Educational Materials</h3>
            <p>Access evidence-based information about various mental health conditions and coping strategies.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👥</div>
            <h3>Support Groups</h3>
            <p>Join virtual and in-person communities where you can share experiences and find understanding.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧘</div>
            <h3>Self-Care Tools</h3>
            <p>Discover practical techniques for stress management, mindfulness, and improving your daily wellbeing.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Stories of Hope</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>"Finding this resource changed everything for me. I finally had the tools I needed to understand my anxiety and start healing."</p>
            <h4>- Sarah K.</h4>
          </div>
          <div className="testimonial-card">
            <p>"The support community here helped me realize I wasn't alone in my struggles. That was the first step toward my recovery."</p>
            <h4>- Michael T.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I was skeptical at first, but the resources provided here gave me practical ways to manage my depression that actually worked."</p>
            <h4>- Jamie L.</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Start Your Journey Today</h2>
        <p>Taking the first step is often the hardest part. We're here to walk alongside you.</p>
        <div className="cta-buttons">
          <button onClick={()=> navigate('/signup')} className="secondary-button">Join Our Community</button>
        </div>
      </section>

    </div>
  );
}

export default Home;