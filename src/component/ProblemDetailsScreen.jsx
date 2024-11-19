import React, { useState, useEffect } from "react";
import {
  supabase,
  fetchProblemDetails,
  saveProblemDetails,
  uploadProblemImage,
} from "../utils/supabase";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ProblemDetailsScreen = ({ problem, onBack }) => {
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [savedDetails, setSavedDetails] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load problem details when the component mounts
  useEffect(() => {
    const loadProblemDetails = async () => {
      setIsLoading(true);
      try {
        const details = await fetchProblemDetails(problem.id);
        if (details) {
          setSavedDetails(details);
          setDescription(details.description || "");
          setCode(details.code || "");
          if (details.image_url) {
            setImagePreview(details.image_url);
          }
        }
      } catch (err) {
        setError("Failed to load problem details.");
      } finally {
        setIsLoading(false);
      }
    };
    loadProblemDetails();
  }, [problem.id]);

  // Handle file selection for image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // Show image preview
    }
  };

  // Save details and handle image upload
  const saveDetails = async () => {
    setIsLoading(true);
    setError(null); // Reset error state
    try {
      let imageUrl = savedDetails?.image_url;
      if (imageFile) {
        imageUrl = await uploadProblemImage(imageFile, problem.id);
      }
      const savedData = await saveProblemDetails(problem.id, {
        description,
        code,
        imageUrl,
      });
      if (savedData) {
        setSavedDetails(savedData);
        alert("Details saved successfully!");
      }
    } catch (error) {
      setError("Failed to save details.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .problem-details-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .problem-details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid #e0e0e0;
          padding-bottom: 10px;
        }

        .back-button {
          background-color: #f0f0f0;
          border: 1px solid #d0d0d0;
          padding: 8px 15px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .back-button:hover {
          background-color: #e0e0e0;
        }

        .back-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .detail-section {
          margin-bottom: 20px;
        }

        .detail-section h2 {
          margin-bottom: 10px;
          color: #333;
        }

        .description-textarea,
        .code-textarea {
          width: 100%;
          min-height: 150px;
          padding: 10px;
          border: 1px solid #d0d0d0;
          border-radius: 4px;
          resize: vertical;
        }

        .code-textarea {
          font-family: 'Courier New', monospace;
        }

        .image-upload {
          margin-bottom: 10px;
        }

        .image-preview {
          width: 100%;
          height: auto;
          object-fit: contain;
          margin-top: 10px;
          border-radius: 4px;
        }

        .save-button {
          width: 100%;
          padding: 12px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .save-button:hover {
          background-color: #45a049;
        }

        .save-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }

        .error-message {
          color: red;
          margin-top: 20px;
        }
      `}</style>
      <div className="problem-details-container">
        <div className="problem-details-header">
          <h1>{problem.name}</h1>
          <button onClick={onBack} className="back-button" disabled={isLoading}>
            ← Back to Problems
          </button>
        </div>

        {/* Display Image Preview after Title */}
        {imagePreview && (
          <div className="detail-section">
            <img
              src={imagePreview}
              alt="Problem Preview"
              className="image-preview"
            />
          </div>
        )}

        <div className="problem-details-content">
          {error && <p className="error-message">{error}</p>}{" "}
          {/* Error message */}
          <div className="detail-section">
            <h2>Description</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Write your problem description here..."
              className="description-textarea"
            />
          </div>
          <div className="detail-section">
            <h2>Solution Code</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
              {code}
            </SyntaxHighlighter>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Paste your solution code here..."
              className="code-textarea"
            />
          </div>
          <div className="detail-section">
            <h2>Solution Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="image-upload"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Solution Preview"
                className="image-preview"
              />
            )}
          </div>
          <button
            onClick={saveDetails}
            className="save-button"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Details"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProblemDetailsScreen;
