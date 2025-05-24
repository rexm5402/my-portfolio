import React from 'react';
import '../App.css';

function About() {
  return (
    <main className="about-section">
      <h1> About Me</h1>
      <h2> Hello! I’m Aryan Murugesh</h2>
      <p>I’m a graduate student in Computer Engineering at Iowa State University with a strong interest in software development and front-end engineering...</p>

      <h2> Academic Background</h2>
      <ul>
        <li>M.S. in Computer Engineering, Iowa State University (2024–2026)</li>
        <li>B.E. in Electronics and Communication Engineering, PES University, Bangalore (2020–2024)</li>
        <li>Published paper in IEEE on fingerprint authentication using SHA-512 and Verilog</li>
      </ul>

      <h2> Internship Experience</h2>
      <h3>Frontend Developer Intern — Skyscend India</h3>
      <ul>
        <li>Developed responsive web interfaces using HTML, CSS, and JavaScript.</li>
        <li>Reduced page load times by 18%.</li>
        <li>Collaborated with designers and backend devs.</li>
      </ul>

      <h3>Software Intern — Scaler Academy</h3>
      <ul>
        <li>Contributed to internal dashboards using React and JS.</li>
        <li>Resolved bugs and helped with backend API testing.</li>
        <li>Generated a revenue impact of ₹6.5 lakhs (~$7,800 USD).</li>
      </ul>

      <h2> Research</h2>
      <ul>
        <li>Working under Prof. Yong Guan on Machine Unlearning research.</li>
        <li>Focusing on privacy-preserving data deletion from ML models.</li>
      </ul>

      <h2> Skills</h2>
      <ul>
        <li><strong>Languages:</strong> JavaScript, Python, Java, HTML, CSS</li>
        <li><strong>Frameworks:</strong> React.js, Tailwind CSS, Node.js</li>
        <li><strong>Tools:</strong> Git, VS Code, Postman, Figma</li>
        <li><strong>Other:</strong> Verilog, SHA-512, Agile, IEEE writing</li>
      </ul>
    </main>
  );
}

export default About;
