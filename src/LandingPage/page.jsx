import React, { useState } from "react";
import "./page.css";

const LandingPage = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  const handleDragOver = (event) => event.preventDefault();

  const scrollToUploadSection = () => {
    document
      .getElementById("upload-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1>Potato Leaf Disease Predictor</h1>
          <p>
            Identify and diagnose potato leaf diseases with precision and speed.
            Improve your crop yield and health by using our state-of-the-art
            predictor tool.
          </p>
          <button onClick={scrollToUploadSection} className="scroll-button">
            Get Started
          </button>
        </div>
      </div>

      <section id="upload-section" className="upload-section">
        <h2>Upload Your Image</h2>
        <p>Drag and drop your potato leaf image or click to upload.</p>
        <div
          className="upload-area"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="upload-content">
            <div className="upload-icon">
              <img
                src="https://cdn-icons-png.flaticon.com/512/786/786205.png"
                alt="Upload Icon"
              />
            </div>
            <p>Drag & Drop an image here or click to upload</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              id="file-input"
              className="file-input"
            />
            <label htmlFor="file-input" className="upload-button">
              Choose File
            </label>
          </div>
        </div>
        {fileName && (
          <div className="file-info">
            <h2>Uploaded File:</h2>
            <p>{fileName}</p>
          </div>
        )}
      </section>

      <section className="why-use-our-predictor">
        <h2>Why Use Our Predictor?</h2>
        <div className="why-us-grid">
          <div className="why-us-item">
            <img
              src="https://scitechdaily.com/images/Plant-Disease-Concept.jpg"
              alt="Fast Diagnosis"
            />
            <h3>Fast Diagnosis</h3>
            <p>Get quick results to make timely decisions for your crops.</p>
          </div>
          <div className="why-us-item">
            <img
              src="https://thumbs.dreamstime.com/b/prediction-magnifying-glass-word-grass-background-selective-focus-80657279.jpg"
              alt="Accurate Predictions"
            />
            <h3>Accurate Predictions</h3>
            <p>
              High precision predictions for the best outcomes for your plants.
            </p>
          </div>
          <div className="why-us-item">
            <img
              src="https://www.shutterstock.com/image-vector/easy-use-vector-illustration-260nw-2095100362.jpg"
              alt="Easy to Use"
            />
            <h3>Easy to Use</h3>
            <p>
              Simply drag and drop images for instant results with minimal
              effort.
            </p>
          </div>
          <div className="why-us-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3D7H049QYOIuHPXTt539lnliQw9wy_CGeEg&s"
              alt="Safe for Crops"
            />
            <h3>Safe for Crops</h3>
            <p>Non-invasive methods to protect your plants from any harm.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Potato Leaf Disease Predictor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
