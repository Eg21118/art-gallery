import React from "react";
import { Link } from "react-router-dom";
import '../App.css'; 

const ArtCard = ({ art }) => {
  const imageUrl = art.webImage ? art.webImage.url : "https://via.placeholder.com/200x300";

  
  console.log("Artwork ID:", art.id);

  return (
    <div className="art-card">
      <Link to={`/art/${art.id}`}>
        <img src={imageUrl} alt={art.title} className="art-image" />
        <h3 className="art-title">{art.title}</h3>
      </Link>
    </div>
  );
};

export default ArtCard;
