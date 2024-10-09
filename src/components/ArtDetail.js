import React from "react";
import "../components/ArtDetail.css";

const ArtDetail = ({ art }) => {
  
  const imageUrl = art.webImage ? art.webImage.url : "https://via.placeholder.com/300x400";

  return (
    <div className="art-detail">
      
      <img src={imageUrl} alt={art.title || "Artwork image"} className="art-detail-image" />

      <div className="art-detail-info">
        <h2>{art.title || "Untitled Artwork"}</h2>
        <p>{art.description || "No description available for this artwork."}</p>
        <p>
          <strong>Artist: </strong>
          {art.principalOrFirstMaker || "Unknown"}
        </p>
        <p>
          <strong>Year: </strong>
          {art.dating?.presentingDate || "Unknown"}
        </p>
      </div>
    </div>
  );
};

export default ArtDetail;
