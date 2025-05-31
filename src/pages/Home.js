import React from 'react';
import '../App.css';

function Home() {
  return (
    <main className="container">
      <section style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '1rem' }}>Aryan Murugesh</h1>

<img 
  src="/IMG_6609.JPG" 
  alt="Aryan Murugesh" 
  style={{
    width: '180px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginBottom: '20px'
  }}
/>

        <h1>Hi, I’m Aryan Murugesh</h1>
        <h2 style={{ color: '#3b82f6', fontWeight: '500' }}>
          Turning complex problems into elegant code.
        </h2>
        <p style={{ maxWidth: '750px', margin: '1.5rem auto', fontSize: '1.1rem', lineHeight: '1.7' }}>
          I’m currently pursuing my Master’s in Computer Engineering at Iowa State University,
          with a specialization in Software Systems. From designing robust web apps to exploring
          the frontier of machine unlearning, I’m driven by the challenge of turning complex problems
          into scalable, secure, and real-world-ready solutions. With hands-on experience as a front-end
          developer and published research in cybersecurity, I bring both technical depth and practical
          execution to the table.
        </p>
        <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', color: '#4b5563' }}>
          This portfolio is more than a showcase — it’s a window into how I think and build.
          Whether it’s a sleek front-end interface, a blockchain-powered dApp, or a privacy-focused Chrome extension,
          each project reflects my obsession with clean architecture, user-centric design, and impactful functionality.
        </p>
      </section>
    </main>
  );
}

export default Home;
