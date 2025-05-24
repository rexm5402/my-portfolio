import React from 'react';
import '../App.css';

function Contact() {
  return (
    <main className="contact-section">
      <h1> Contact Me</h1>
      <p>I’m always excited to connect — job roles, research ideas, or tech chats!</p>

      <h3> Email</h3>
      <p>
        Primary: <a href="mailto:murugesharyan@gmail.com">murugesharyan@gmail.com</a><br />
        Alternate: <a href="mailto:aryanm54@iastate.edu">aryanm54@iastate.edu</a>
      </p>

      <h3> Phone</h3>
      <p>+1 (515) 337-9991</p>

      <h3> Address</h3>
      <p>103 Campus Ave, Ames, Iowa – 50014, USA</p>

      <h3> LinkedIn</h3>
      <p><a href="https://www.linkedin.com/in/aryan-murugesh" target="_blank" rel="noopener noreferrer">linkedin.com/in/aryan-murugesh</a></p>
    </main>
  );
}

export default Contact;
