import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArtDetails } from "../api";
import "../components/ArtDetail.css";

const ArtDetail = () => {
  const { id } = useParams(); 
  const [art, setArt] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArtDetails = async () => {
      try {
        setLoading(true); 
        const artDetails = await fetchArtDetails(id); 
        setArt(artDetails);
      } catch (err) {
        console.error("Failed to load artwork details:", err);
        setError("Art object not found or failed to load.");
      } finally {
        setLoading(false); 
      }
    };

    loadArtDetails();
  }, [id]); 

  
  if (loading) {
    return <div className="loading-message">Loading artwork details...</div>;
  }

  
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  
  if (!art) {
    return <div className="error-message">No artwork details found.</div>;
  }

  return (
    <div className="art-detail">
      <button className="back-button" onClick={() => window.history.back()}>← Back to Gallery</button>

      <div className="art-detail-content">
        <div className="art-detail-image-container">
          {art.image ? (
            <img src={art.image} alt={art.name} className="art-detail-image" />
          ) : (
            <p className="no-image-message">No image available for this artwork.</p>
          )}
        </div>

        <div className="art-detail-info">
          <h1 className="art-detail-title">{art.name}</h1>
          <p className="art-detail-description">{art.description || "No description available for this artwork."}</p>
          <p className="art-detail-meta">
            <strong>Artist:</strong> {art.principalOrFirstMaker || "Unknown"}
          </p>
          <p className="art-detail-meta">
            <strong>Year:</strong> {art.dating?.presentingDate || "Unknown"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtDetail;
