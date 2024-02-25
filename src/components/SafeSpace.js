// SafeSpace.js
import React, { useState, useEffect } from 'react';

const SafeSpace = () => {
  const [location, setLocation] = useState(null);
  const [safeSpaces, setSafeSpaces] = useState([]);
  const [mood, setMood] = useState('');

  // Function to handle mood submission
  const handleFindSafeSpaces = async () => {
    if (location && mood) {
      // Replace with the actual API endpoint and include the necessary parameters
      try {
        const response = await fetch(`/api/safe-spaces?lat=${location.latitude}&lng=${location.longitude}&mood=${mood}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setSafeSpaces(data);
      } catch (error) {
        console.error("Could not fetch safe spaces:", error);
      }
    }
  };

  // Get the user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      }, (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      });
    }
  }, []);

  return (
    <div>
      <h2>Safe Spaces Near You</h2>
      <div>
        <input 
          type="text" 
          placeholder="Enter your mood" 
          value={mood} 
          onChange={(e) => setMood(e.target.value)} 
        />
        <button onClick={handleFindSafeSpaces}>Find Safe Spaces</button>
      </div>
      {location ? (
        safeSpaces.length > 0 ? (
          <ul>
            {safeSpaces.map((space, index) => (
              <li key={index}>{space.name} - {space.description}</li>
            ))}
          </ul>
        ) : (
          <p>Enter your mood and click "Find Safe Spaces" to see results.</p>
        )
      ) : (
        <p>Getting your location...</p>
      )}
    </div>
  );
};

export default SafeSpace;
