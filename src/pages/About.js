import React from 'react';

function About() {
  return (
    <div>
      <h1>About Me</h1>

      <p>
        I’m Aryan Murugesh, a Master’s student in Computer Engineering at Iowa State University, specializing in Software Systems.
        I bring a multidisciplinary background — with a Bachelor’s in Electronics and Communication Engineering from PES University —
        and a passion for building software that solves real problems.
      </p>

      <p>
        Over the years, I’ve explored the spectrum of technology — from front-end development to distributed systems, blockchain,
        and cybersecurity research. My journey includes:
      </p>

      <ul>
        <li>
          A front-end development internship at Skyscend India Pvt Ltd, where I translated business goals into clean,
          responsive user interfaces.
        </li>
        <li>
          A software intern stint at Scaler Academy, where I helped build internal tools and workflows, generating tangible value.
        </li>
        <li>
          A co-authored IEEE publication on fingerprint authentication using SHA-512 and Verilog.
        </li>
        <li>
          A current summer research project under Prof. Yong Guan, focusing on machine unlearning for privacy-preserving AI systems.
        </li>
      </ul>

      <p>
        I love working at the intersection of research and application — diving deep into the “how” while keeping the “why” in focus.
      </p>

      <h2>What I Bring to the Table</h2>
      <ul>
        <li>Hands-on coding experience with HTML, CSS, JavaScript, Python, Java, Solidity</li>
        <li>Strong foundations in distributed systems, data storage, and computer networks</li>
        <li>Experience with cloud simulation (iFogSim), Ethereum smart contracts, and machine learning</li>
        <li>An ability to adapt quickly, work independently, and communicate effectively</li>
      </ul>

      <h2>What I’m Looking For</h2>
      <p>
        I’m actively seeking opportunities — internships or full-time roles — in software development, front-end engineering,
        or research-heavy roles where I can grow while contributing meaningfully.
        My goal is to work on real-world systems that demand both reliability and creativity.
      </p>

      <a 
  href="/Aryan_Murugesh_Resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  style={{ 
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    background: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }}
>
  View My Resume
</a>

    </div>
  );
}

export default About;
