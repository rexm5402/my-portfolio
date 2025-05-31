import React from 'react';

const EdgeCloud = () => {
  return (
    <div className="project-page">
      <h1>Optimizing Latency in Edge-Cloud Computing for Real-Time Applications</h1>
      <p><strong>Individual Term Project | Distributed Systems | Iowa State University | Spring 2025</strong></p>
      
      <p>
        This project explored how edge computing can reduce latency in cloud-based architectures for real-time applications
        like smart surveillance, industrial automation, and IoT. Using the iFogSim simulator, I modeled and analyzed
        various edge-cloud deployments to measure their effect on latency, energy consumption, and network load.
      </p>

      <h2>Project Objective</h2>
      <p>
        To design, simulate, and evaluate an architecture that minimizes delay for real-time workloads by intelligently
        offloading computation between edge nodes (fog devices) and cloud servers.
      </p>

      <h2>Architecture & Methodology</h2>
      <ul>
        <li>Modeled a multi-tier edge-cloud architecture with fog nodes placed closer to the data source (e.g., cameras, sensors).</li>
        <li>Used iFogSim, a simulation toolkit built on CloudSim, to create custom topologies and deploy latency-sensitive applications like real-time video analytics.</li>
        <li>Designed multiple placement strategies and task scheduling algorithms to test latency trade-offs between the cloud layer, fog layer, or dynamically between both.</li>
      </ul>

      <h2>Simulation Setup</h2>
      <ul>
        <li>Developed application modules (source, processing, sink) using iFogSim APIs.</li>
        <li>Configured physical devices with constraints like CPU, RAM, and bandwidth.</li>
        <li>Simulated real-time workloads (e.g., object detection on video frames) with varying processing intensities.</li>
      </ul>

      <h2>Performance Evaluation</h2>
      <ul>
        <li><strong>Baseline vs Optimized Models:</strong> Compared a traditional cloud-only model with an edge-augmented model.</li>
        <li>Key metrics measured: average latency, network usage, and energy consumption.</li>
        <li>Optimized strategies showed up to 40–60% reduction in end-to-end latency, especially for high-frequency tasks and sensor bursts.</li>
      </ul>

      <h2>Tools & Technologies</h2>
      <ul>
        <li>iFogSim 1.0 (built on CloudSim 3.0)</li>
        <li>Java (for application module development)</li>
        <li>NetBeans IDE, JDK 8</li>
        <li>Custom loggers for latency data and plots</li>
      </ul>

      <h2>Key Learnings & Contributions</h2>
      <ul>
        <li>Showed that offloading computation to edge nodes significantly reduces response time.</li>
        <li>Demonstrated impact of application module placement on performance.</li>
        <li>Produced visual charts to guide fog-based distributed system design.</li>
        <li>Identified limitations in iFogSim and proposed enhancements for future work.</li>
      </ul>

      <h2>Report</h2>
      <p>
        <a href="/distributed system term paper final submission .pdf" target="_blank" rel="noopener noreferrer">
          View Full PDF Report
        </a>
      </p>
    </div>
  );
};

export default EdgeCloud;
