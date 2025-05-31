import React from 'react';
import '../App.css';

function About() {
  return (
    <main className="container">
      <section>
        <h1>About Me</h1>
        <p>
          I’m Aryan Murugesh, a Master’s student in Computer Engineering at Iowa State University,
          specializing in Software Systems. I bring a multidisciplinary background — with a Bachelor’s
          in Electronics and Communication Engineering from PES University — and a passion for building
          software that solves real problems.
        </p>
      </section>

      <section>
        <h2>🧠 Experience & Research</h2>
        <ul>
          <li>
            <strong>Front-End Developer Intern</strong> @ Skyscend India Pvt Ltd  
            <br />Crafted responsive UI components, optimized codebase, improved modularity.
          </li>
          <li>
            <strong>Software Intern</strong> @ Scaler Academy  
            <br />Helped build internal tools and onboarding flows; contributed to a ₹6.5L revenue impact.
          </li>
          <li>
            <strong>IEEE-Published Author</strong>  
            <br />Co-authored a paper on fingerprint authentication using SHA-512 & Verilog.
          </li>
          <li>
            <strong>Research Assistant</strong> @ Iowa State (Prof. Yong Guan)  
            <br />Working on machine unlearning — removing data from trained models to ensure privacy compliance.
          </li>
        </ul>
      </section>

      <section>
        <h2>🛠️ What I Bring</h2>
        <ul>
          <li>Languages: HTML, CSS, JavaScript, Python, Java, Solidity</li>
          <li>Concepts: Distributed Systems, Storage, Cloud, Networking</li>
          <li>Tools: React.js, Git, iFogSim, Ethereum, Node.js, Figma</li>
          <li>Traits: Fast-learner, independent builder, clear communicator</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a 
          href="/Aryan_Murugesh_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="button"
        >
          View My Resume
        </a>
      </section>
    </main>
  );
}

export default About;
