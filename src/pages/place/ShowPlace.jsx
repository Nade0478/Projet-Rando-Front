import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ImageComponent = ({ imageUrl, altText }) => (
  <div className="image-component">
    <img src={imageUrl} alt={altText} width="100%" style={{ borderRadius: "8px" }} />
  </div>
);

const MapComponent = ({ longitude, latitude, name }) => (
  <div className="map-component" style={{ width: "100%", height: "300px" }}>
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ width: "100%", height: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>{name}</Popup>
      </Marker>
    </MapContainer>
  </div>
);

const ShowPlace = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlace();
  }, []);

  const fetchPlace = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/place/${id}`);
      setPlace(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des détails :", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Chargement des informations...</p>;
  }

  if (!place) {
    return <p>Le lieu demandé est introuvable.</p>;
  }

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <h1>{place.name_place}</h1>
        <p><strong>Description :</strong> {place.description_place}</p>
        <div className="row">
          {/* Image Component */}
          <div className="col-md-6">
            {place.image_place && (
              <ImageComponent
                imageUrl={`http://127.0.0.1:8000/images/${place.image_place}`}
                altText={place.name_place}
              />
            )}
          </div>
          {/* Map Component */}
          <div className="col-md-6">
            {place.latitude_place && place.longitude_place && (
              <MapComponent
                latitude={place.latitude_place}
                longitude={place.longitude_place}
                name={place.name_place}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShowPlace;
