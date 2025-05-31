import React from 'react';
import '../App.css';

function About() {
  return (
    <main className="container">
      <section style={styles.card}>
        <h1 style={styles.heading}>About Me</h1>
        <p style={styles.text}>
          I’m Aryan Murugesh, a Master’s student in Computer Engineering at Iowa State University,
          specializing in Software Systems. I hold a Bachelor’s in Electronics and Communication Engineering
          from PES University, and I love solving real-world problems through software.
        </p>
      </section>

      <section style={styles.card}>
        <h2 style={styles.subheading}> Experience & Research</h2>
        <ul style={styles.ul}>
          <li>
            <strong>Front-End Developer Intern</strong> @ Skyscend India Pvt Ltd  
            <br /><span style={styles.muted}>Crafted responsive UI components, optimized codebase, improved modularity.</span>
          </li>
          <li>
            <strong>Software Intern</strong> @ Scaler Academy  
            <br /><span style={styles.muted}>Built internal tools and flows; contributed to ₹6.5L revenue impact.</span>
          </li>
          <li>
            <strong>IEEE-Published Author:</strong>  
            <br /><span style={styles.muted}>Fingerprint authentication using SHA-512 & Verilog (published).</span>
          </li>
          <li>
            <strong>Research Assistant</strong> @ Iowa State (Prof. Yong Guan)  
            <br /><span style={styles.muted}>Working on machine unlearning — privacy-safe AI model training.</span>
          </li>
        </ul>
      </section>

      <section style={styles.card}>
        <h2 style={styles.subheading}>Skills At a Glance</h2>
        <ul style={styles.grid}>
          <li><strong>Languages:</strong> HTML, CSS, JS, Python, Java,</li>
          <li><strong>Concepts:</strong> Distributed Systems, Storage, Cloud, </li>
          <li><strong>Tools:</strong> React.js, Git, iFogSim, Node.js</li>
          <li><strong>Traits:</strong> Fast-learner, Team builder, clear communicator</li>
        </ul>
      </section>

      
    </main>
  );
}

const styles = {
  card: {
    background: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
  },
  heading: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
    color: '#111827'
  },
  subheading: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: '#1f2937'
  },
  text: {
    fontSize: '1.05rem',
    lineHeight: '1.7',
    color: '#374151'
  },
  ul: {
    listStyle: 'disc',
    paddingLeft: '1.2rem',
    color: '#374151',
    lineHeight: '1.6'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    listStyle: 'none',
    padding: 0,
    color: '#374151'
  },
  muted: {
    fontSize: '0.95rem',
    color: '#6b7280'
  }
};

export default About;
