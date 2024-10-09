
import React, { useState, useEffect } from "react";
import { fetchArtworks } from "../api"; 
import ArtCard from "../components/ArtCard";
import { Link } from 'react-router-dom'; 
import '../App.css'; 

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);

  
  useEffect(() => {
    loadArtworks(); 
  }, []);

  
  const loadArtworks = async () => {
    try {
      console.log("Fetching new artworks...");
      const artData = await fetchArtworks(); 
      console.log("Fetched artworks:", artData);
      setArtworks(artData); 
    } catch (error) {
      console.error("Failed to load artworks", error);
    }
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Rijksmuseum Shuffle</h1>

      
      <div className="art-row">
        {artworks && artworks.length > 0 ? (
          artworks.map((art) => (
            <Link key={art.id} to={`/art/${art.id}`}>
              <ArtCard art={art} /> 
            </Link>
          ))
        ) : (
          <p>No artworks to display</p>
        )}
      </div>

      
      <div className="shuffle-button-container">
        <button className="shuffle-button" onClick={loadArtworks}>
          Shuffle
        </button>
      </div>
    </div>
  );
};

export default Gallery;
