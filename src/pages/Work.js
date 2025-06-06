// Work.js
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <main className="work-section">
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>My Work</h1>

      <section className="research-section">
        <h1 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1rem', color: '#333' }}>Research Publication</h1>
        <div className="project">
          <h2><Link to="/research-fingerprint">
          Design and Implementation of an Efficient Fingerprint Authentication Algorithm using SHA-512</Link></h2>
          <p>Co-authored an IEEE-published research paper that designed a secure biometric verification system combining cryptography and hardware-level design.</p>
        </div>
      </section>

      <section className="project-list">
      <h1 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '1rem', color: '#333' }}>Projects</h1>
        <div className="project">
        <h2><Link to="/project-bugmap">Analyzing and classifying file system bugs and predicting IOPS score using logistic regression using patch summary</Link></h2>

          <p>A comprehensive tool and empirical study on Linux file system patches using ML classification and IOPS latency simulation using QEMU & FEMU.</p>
        </div>

        <div className="project">
          <h2><Link to="/edge-cloud">Optimizing Latency in Edge–Cloud Computing for Real-Time Applications</Link></h2>
          <p>A distributed systems research project using iFogSim to reduce round-trip latency in IoT cloud deployments, with flowcharts, simulation, and performance graphs.</p>
        </div>

        <div className="project">
          <h2><Link to="/project-videogen">AI-Powered Video Generation Using Stable Diffusion</Link></h2>
          <p>Generated short, realistic videos from text prompts using Stable Diffusion and DreamBooth fine-tuning, with a focus on creative AI generation pipelines.</p>
        </div>

        <div className="project">
          <h2><Link to="/project-pricepredict">Machine Learning-Based Industry Price Prediction</Link></h2>
          <p>Built a regression model using scikit-learn to forecast fluctuating industry prices, evaluated using MSE/R2, and visualized predictions.</p>
        </div>
      </section>
    </main>
  );
}

export default Work;
