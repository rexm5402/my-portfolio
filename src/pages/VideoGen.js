import React from 'react';
import '../App.css';

function VideoGen() {
  return (
    <main className="detail-page">
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#333' }}>
         AI-Powered Video Generation Using Stable Diffusion
      </h1>
      <h3 style={{ color: '#555', marginBottom: '1.5rem' }}>
        Personal Research Project | Creative AI & Generative Models | 2024
      </h3>

      <p>
        This project focused on leveraging Stable Diffusion, a state-of-the-art text-to-image diffusion model, to generate coherent and controllable AI-generated video content. The goal was to extend the capabilities of static image generation into the temporal domain — producing short videos that maintain both semantic consistency and visual fluidity across frames.
      </p>

      <h2 style={{ marginTop: '1.5rem' }}> Objective</h2>
      <p>
        To explore how diffusion models can be adapted for video generation by controlling frame-wise consistency and enabling scene evolution from natural language prompts.
      </p>

      <h2 style={{ marginTop: '1.5rem' }}> Core Idea & Methodology</h2>
      <ul>
        <li>Used Stable Diffusion v1.5 as the base model for generating high-quality individual frames from text prompts.</li>
        <li>Implemented frame interpolation techniques (e.g., RIFE, FILM) and latent space conditioning to ensure temporal smoothness.</li>
        <li>Fine-tuned control parameters (e.g., seed, guidance scale, denoising strength) to maintain consistency across frames and produce motion continuity.</li>
        <li>Integrated the frame generation and interpolation pipeline to automate prompt-to-video synthesis.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}> Tools & Frameworks</h2>
      <ul>
        <li>Stable Diffusion (AUTOMATIC1111 + HuggingFace)</li>
        <li>Python, Torch, Diffusers</li>
        <li>RIFE / FILM (frame interpolation)</li>
        <li>OpenCV (frame stitching and encoding)</li>
        <li>Gradio (optional UI demo)</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}> Features and Capabilities</h2>
      <ul>
        <li><strong>Prompt-based Video Creation:</strong> Create 5–10 second videos from natural language prompts.</li>
        <li><strong>Custom Seed Control:</strong> Ensures reproducibility and identity retention across frames.</li>
        <li><strong>Variable Motion Effects:</strong> Modify motion speed and direction between scenes.</li>
        <li><strong>Style Customization:</strong> Support for themes like cyberpunk, anime, or realism via prompt engineering.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}>Results & Impact</h2>
      <ul>
        <li>Generated smooth, AI-crafted videos retaining visual identity without flickering.</li>
        <li>Applications include creative content generation, animation prototyping, and dataset creation for video models.</li>
      </ul>

      <h2 style={{ marginTop: '1.5rem' }}> Key Learnings</h2>
      <ul>
        <li>Identified limitations of static diffusion models in time series applications.</li>
        <li>Explored temporal coherence through interpolation and latent conditioning.</li>
        <li>Opened up future directions in motion guidance, 3D generation, and text-to-video tuning.</li>
      </ul>

      <p style={{ marginTop: '1.5rem' }}>
        This project combined creativity with deep learning, showing how AI can revolutionize video production workflows and enable rapid visual storytelling with minimal human input.
      </p>
    </main>
  );
}

export default VideoGen;
