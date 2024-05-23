// eslint-disable-next-line no-unused-vars
import React from 'react'
import Image from '../images/@.png';
import './Home.css';
function Home() {
  return (
    <>
    <div className='image-container'>
      <img src={Image} alt="background-image" />
      <h1>You are resilient, you are unstoppable</h1>
    </div>
    <footer className='footer'>
        <div className='footer-content'>
          <div className='footer-text'>
            <p><strong>Calm Corner:</strong><br />Dedicated platform for mental health support. Promoting well-being & guidance.</p>
            <p>Address: 123 Calm Street, Calmville, CA 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@calmcorner.com</p>
          </div>
          <div className='footer-bottom'>
            <p>© 2024 Calm Corner. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
    
  )
}

export default Home
