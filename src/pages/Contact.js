import React from 'react';
import '../App.css';

function Contact() {
  return (
    <main className="container">
      <div style={styles.card}>
        <h1 style={styles.heading}> Let’s Talk</h1>
        <p style={styles.subtext}>
          You made it this far — now let’s make it count.
        </p>
        <p style={styles.text}>
          I’m open to new opportunities, research collaborations, and exciting projects. Whether you're a recruiter,
          developer, researcher, or just curious about my work — I’d love to connect.
        </p>

        <div style={styles.contactBlock}>
          <h2 style={styles.sectionHeading}>🤝 Reach Me At</h2>
          <ul style={styles.list}>
            <li>
              <strong>Email (Primary):</strong>{' '}
              <a href="mailto:murugesharyan@gmail.com">murugesharyan@gmail.com</a>
            </li>
            <li>
              <strong>Email (University):</strong>{' '}
              <a href="mailto:aryanm54@iastate.edu">aryanm54@iastate.edu</a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a href="tel:+15153379991">+1 (515) 337-9991</a>
            </li>
            <li>
              <strong>Address:</strong>{' '}
              103 Campus Ave, Ames, IA 50014, USA
            </li>
            <li>
              <strong>LinkedIn:</strong>{' '}
              <a
                href="https://www.linkedin.com/in/aryan-murugesh-2a1154217/"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/aryanmurugesh
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

const styles = {
  card: {
    background: '#ffffff',
    borderRadius: '12px',
    padding: '2.5rem',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
    maxWidth: '720px',
    margin: '0 auto',
    textAlign: 'center'
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#111827'
  },
  subtext: {
    fontSize: '1.1rem',
    color: '#374151',
    marginBottom: '1rem'
  },
  text: {
    fontSize: '1rem',
    color: '#4b5563',
    marginBottom: '2rem',
    lineHeight: '1.6'
  },
  sectionHeading: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '1rem'
  },
  contactBlock: {
    textAlign: 'left'
  },
  list: {
    listStyle: 'none',
    paddingLeft: 0,
    fontSize: '1rem',
    lineHeight: '1.8'
  }
};

export default Contact;
