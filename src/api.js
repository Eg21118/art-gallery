const API_KEY = "X9zEBolx"; 

export const fetchArtworks = async (count = 3) => {
  try {
    const randomPage = Math.floor(Math.random() * 100); 
    console.log("Requesting artworks from page:", randomPage);

    const response = await fetch(
      `https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&ps=${count}&p=${randomPage}`
    );
    const data = await response.json();
    console.log("API response:", data);
    return data.artObjects; 
  } catch (error) {
    console.error("Error fetching art:", error);
    throw error;
  }
};

export const fetchArtDetails = async (id) => {
  
  const cleanId = id.startsWith('en-') ? id.slice(3) : id;

  const url = `https://www.rijksmuseum.nl/api/en/collection/${cleanId}?key=${API_KEY}`;
  console.log("Fetching details from URL:", url); 

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch details: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API response:", data);

    
    if (!data.artObject) {
      throw new Error("Art object not found or is unavailable.");
    }

    
    return {
      id: data.artObject.objectNumber,
      name: data.artObject.title || "Untitled",
      description: data.artObject.description || "No description available.",
      image: data.artObject.webImage ? data.artObject.webImage.url : "https://via.placeholder.com/300x400", 
      principalOrFirstMaker: data.artObject.principalOrFirstMaker || "Unknown artist",
      dating: data.artObject.dating ? data.artObject.dating.presentingDate : "Unknown date",
      physicalMedium: data.artObject.physicalMedium || "Unknown medium",
      dimensions: data.artObject.dimensions || [],
      location: data.artObject.location || "Unknown location",
    };
  } catch (error) {
    console.error("Error fetching art details:", error);
    throw error; 
  }
};





