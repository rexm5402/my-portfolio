import React from 'react';
import '../App.css';

function ResearchFingerprint() {
  return (
    <main className="detail-page">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#333' }}>
      Design and Implementation of an Efficient Fingerprint Authentication Algorithm using SHA-512
      </h1>
      <h3 style={{ color: '#555', marginBottom: '1.5rem' }}>
        Co-Author | Published at <a href="https://ieeexplore.ieee.org/document/10548466" target="_blank" rel="noopener noreferrer">IEEE Conference</a>
      </h3>

      <p>
        During my final year at PES University, I co-authored a research project focused on developing a secure, hardware-backed fingerprint authentication system that integrates SHA-512 cryptographic hashing with Verilog-based implementation on FPGA. This work was published and presented at the IEEE Bellary Conference, demonstrating our system's real-world feasibility and security benefits.
      </p>

      <p>
        The primary objective was to address vulnerabilities in traditional biometric systems, which often store raw fingerprint data or weakly encrypted formats — leaving them exposed to privacy breaches and data tampering. We built a pipeline that never stores the original fingerprint and performs authentication directly in hardware, significantly minimizing the attack surface.
      </p>

      <h2 style={{ marginTop: '1.5rem' }}>Key Components of the System</h2>

      <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
        <li><strong>Fingerprint Feature Extraction:</strong> We used MATLAB to process fingerprint images and extract minutiae points — the defining features like ridge endings and bifurcations that uniquely identify a fingerprint.</li>
        <li><strong>SHA-512 Hash Generation:</strong> These extracted features were encoded into a binary format and hashed using the SHA-512 algorithm, which produces a 512-bit digest that is irreversible and highly secure.</li>
        <li><strong>Verilog Implementation on FPGA:</strong> The SHA-512 module was implemented in Verilog and synthesized using Xilinx Vivado. The complete authentication logic was deployed on an FPGA to ensure high-speed, tamper-resistant verification.</li>
        <li><strong>Hardware-Level Matching:</strong> The system compares incoming fingerprints against stored hash values in real-time, without any software processing — making it immune to OS-level threats and memory leaks.</li>
        <li><strong>Functional Testing & Simulation:</strong> We validated the system with custom testbenches and simulated various edge cases (false inputs, noise-injected features, etc.) to ensure robustness, accuracy, and low latency.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Highlights & Contributions</h2>
      <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
        <li>Designed and coded the SHA-512 hashing pipeline in Verilog for FPGA execution.</li>
        <li>Developed the MATLAB-based fingerprint preprocessing and encoding module.</li>
        <li>Executed system-level simulations using Vivado and analyzed performance metrics.</li>
        <li>Co-authored the paper and presented findings at the IEEE Bellary Conference.</li>
        <li>Proposed a tamper-proof authentication solution ideal for embedded systems and secure IoT environments.</li>
      </ul>

      <p style={{ marginTop: '1.5rem' }}>
        This project was a turning point in my academic journey — combining theory, hardware, and cryptography into a solution that’s practical, scalable, and relevant in today’s privacy-focused world.
      </p>
    </main>
  );
}

export default ResearchFingerprint;
