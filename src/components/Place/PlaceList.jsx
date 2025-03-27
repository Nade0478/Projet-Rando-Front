import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaceCard from "./PlaceCard";

const PlaceList = () => {
  const [place, setPlaces] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/place")
      .then((response) => setPlaces(response.data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données :", error)
      );
  }, []);

  return (
    <div className="placeList">
      {place.map((place, index) => (
        <PlaceCard key={index} place={place} />
      ))}
    </div>
  );
};

export default PlaceList;
