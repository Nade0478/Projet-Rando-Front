import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pageplace = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlace();
  }, [id]);

  const fetchPlace = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/place/${id}`);
      setPlace(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération du lieu :", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!place) {
    return <p>Le lieu demandé est introuvable.</p>;
  }

  return (
    <div className="container mt-5">
      <h1>{place.name_place}</h1>
      <p><strong>Description :</strong> {place.description_place}</p>
      <p><strong>Longitude :</strong> {place.longitude_place}</p>
      <p><strong>Latitude :</strong> {place.latitude_place}</p>
      <p><strong>Distance :</strong> {place.distance_place} km</p>
      <p><strong>Difficulté :</strong> {place.difficulty_place}</p>
      <p><strong>Temps estimé :</strong> {place.estimated_time_place}</p>
      {place.image_place && (
        <img 
          src={`http://127.0.0.1:8000/public/uploads/${place.image_place}`} 
          alt={place.name_place} 
          width="300px" 
        />
      )}
    </div>
  );
};

export default Pageplace;
