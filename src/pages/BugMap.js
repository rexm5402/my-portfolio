import React from 'react';
import '../App.css';

function BugMap() {
  return (
    <main className="detail-page">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#333' }}>
         Analyzing & Classifying File System Bugs + Predicting IOPS with ML
      </h1>
      <h3 style={{ color: '#555', marginBottom: '1.5rem' }}>
        Individual Research Project | Iowa State University | Spring 2025
      </h3>

      <h3 style={{ color: '#555', marginBottom: '1rem' }}>
         <a 
          href="/_extended%20advance%20data%20storage%20project%20report%20submission.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          View Full Project Report (PDF)
        </a>
      </h3>

      <p>
        This project presents a comprehensive empirical study on Linux file system bugs through the lens of machine learning and performance simulation. The objective was twofold: (1) to automatically classify bug types in Linux kernel patch logs using ML, and (2) to predict their impact on IOPS (Input/Output Operations Per Second) using regression modeling — followed by runtime validation using QEMU and FEMU simulators.
      </p>

      <h2 style={{ marginTop: '1.5rem' }}>Project Goals</h2>
      <ul>
        <li>Create a tool to process and analyze thousands of Linux ext4 file system patches.</li>
        <li>Apply machine learning classification to categorize bug types based on patch summaries.</li>
        <li>Use logistic and linear regression to predict IOPS degradation from specific bugs.</li>
        <li>Validate predictions through runtime simulations of real file system workloads.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Technical Workflow</h2>
      <h3>Patch Data Extraction & Preprocessing</h3>
      <ul>
        <li>Used the FAST'13 dataset (5,000+ file system patches from ext4, btrfs, and xfs).</li>
        <li>Extracted patch summaries, cleaned commit messages, and encoded them using TF-IDF vectorization.</li>
      </ul>

      <h3>Bug Classification with Machine Learning</h3>
      <ul>
        <li>Implemented Support Vector Machine (SVM) and Logistic Regression classifiers to label bugs by type (e.g., memory errors, synchronization issues, validation flaws).</li>
        <li>Achieved reliable accuracy on a manually annotated subset using cross-validation.</li>
      </ul>

      <h3>IOPS Prediction Using Regression</h3>
      <ul>
        <li>Built a regression model to predict performance drops (IOPS/latency) based on textual patch features.</li>
        <li>Trained models on simulated performance results from selected bugs.</li>
      </ul>

      <h3>Simulation & Evaluation using QEMU + FEMU + FIO</h3>
      <ul>
        <li>Simulated file system behavior under patch influence using QEMU virtual machine with FEMU SSD emulator.</li>
        <li>Ran FIO (Flexible IO Tester) workloads (random write/read, sequential operations).</li>
        <li>Collected real runtime data (IOPS and latency) for model validation.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Key Contributions</h2>
      <ul>
        <li>Built an end-to-end pipeline from patch mining to classification and performance prediction.</li>
        <li>Integrated ML-based bug triaging with runtime system evaluation — rarely combined in filesystem research.</li>
        <li>Demonstrated how certain types of bugs consistently lead to IOPS degradation.</li>
        <li>Provided a prototype tool for kernel developers to assess bug severity before merge.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Tools & Technologies</h2>
      <ul>
        <li>Python (pandas, scikit-learn, NumPy, matplotlib)</li>
        <li>FEMU, QEMU, FIO for SSD and file system benchmarking</li>
        <li>TF-IDF, SVM, Logistic Regression, Linear Regression</li>
        <li>Bash, Linux environment, and QEMU guest OS customization</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}> Outcome</h2>
      <ul>
        <li>Revealed measurable trends between patch type and IOPS impact.</li>
        <li>Achieved ~85% accuracy in multi-class bug classification.</li>
        <li>Regression model successfully predicted IOPS degradation range for unseen patches with strong correlation to simulation results.</li>
      </ul>

      <p style={{ marginTop: '1.5rem' }}>
        This project blends software engineering, ML, and systems-level research — offering insights into how early-stage bug analysis can help developers prevent critical performance bottlenecks in production environments.
      </p>
    </main>
  );
}

export default BugMap;
