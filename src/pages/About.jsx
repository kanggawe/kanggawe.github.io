import React from 'react'

function About() {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>This is the about page of our application.</p>
      <div className="about-content">
        <h2>Our Mission</h2>
        <p>
          We are dedicated to creating amazing web applications using modern 
          technologies like React, Vite, and React Router.
        </p>
        
        <h2>Technologies Used</h2>
        <ul>
          <li>React 18+</li>
          <li>React Router v7</li>
          <li>Vite</li>
          <li>JavaScript (ES6+)</li>
        </ul>
      </div>
    </div>
  )
}

export default About
