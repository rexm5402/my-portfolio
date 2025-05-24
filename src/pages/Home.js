// Home.js
import React from 'react';
import '../App.css';

function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h1> Welcome — I’m Aryan Murugesh</h1>
        <h2>Software Developer | Front-End Engineer | Researcher</h2>

        <p>
          I design and build web applications that are clean, fast, and human-focused. With a background in Electronics and Communication Engineering and a Master’s in Computer Engineering from Iowa State University, I bring a rare combination of low-level technical insight and high-level product thinking to every project.
        </p>

        <p>
          Over the past few years, I’ve gone from crafting intuitive front-end interfaces to contributing to real-world research in secure systems and machine learning. My journey has been shaped by:
        </p>

        <ul>
          <li> A front-end developer internship at Skyscend India, where I implemented scalable design systems and optimized UI performance.</li>
          <li> A software internship at Scaler Academy, where I supported full-stack initiatives in fast-paced product teams.</li>
          <li> A published IEEE paper on secure biometric authentication during my undergrad at PES University.</li>
          <li> A current research project in machine unlearning under Professor Yong Guan, addressing privacy and trust in artificial intelligence.</li>
        </ul>

        <h2> What I Build</h2>
        <p>
          My focus is simple: create software that solves problems and scales with people. I’ve built everything from internal dashboards and data visualizations to dynamic user-facing applications. I’m comfortable turning whiteboard concepts into working production-grade features.
        </p>

        <h2> What Drives Me</h2>
        <p>
          Every line of code I write is grounded in purpose. Whether it’s improving user experiences, securing systems, or exploring the boundaries of ethical machine learning, I approach software as both a craft and a responsibility.
        </p>
      </div>
    </section>
  );
}

export default Home;
