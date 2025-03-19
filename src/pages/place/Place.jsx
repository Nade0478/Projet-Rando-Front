import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import du hook useNavigate
import Footer from "../../components/Footer";
import FilterDropdown from "../../components/FilterDropdown";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import L from "leaflet";
// import 'leaflet/dist/leaflet.css';

// const customIcon = new L.Icon({
//   iconUrl: "src/Images/Autre/icon-randonneur.png", // Remplacez par l'URL de votre icône
//   iconSize: [25, 25],
//   iconAnchor: [16, 32],
//   popupAnchor: [0, -32],
// });

const Place = () => {
  const [place, setPlace] = useState([]); // Liste des lieux
  const [name_place, setName_place] = useState([]); // Liste des noms de lieux
  const [selectedName_place, setSelectedName_place] = useState(null); // Nom sélectionné pour le filtre
  const navigate = useNavigate(); // Hook pour gérer les redirections

  // Charger les lieux au montage du composant
  useEffect(() => {
    displayPlace();
  }, []);

  // Fonction pour récupérer les lieux depuis l'API
  const displayPlace = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/place");
      setPlace(response.data); // Met à jour les lieux
      setName_place(response.data.map((place) => place.name_place)); // Met à jour la liste des noms
    } catch (error) {
      console.error("Erreur lors de la récupération des lieux :", error);
    }
  };

  // Fonction pour supprimer un lieu
  const deletePlace = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/place/${id}`);
      displayPlace(); // Rafraîchit la liste après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression du lieu :", error);
    }
  };

  // Fonction pour rediriger vers la page de détail
  const showPlace = (id) => {
    navigate(`/place/show/${id}`); // Redirige vers la page avec les détails du lieu
  };

  // Filtrage des lieux selon le nom sélectionné
  const filteredPlaces = place.filter((place) => {
    return !selectedName_place || place.name_place === selectedName_place;
  });

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        {/* Dropdown pour le filtrage */}
        <div className="d-flex justify-content-between mb-3">
          <FilterDropdown
            items={name_place}
            selectedItem={selectedName_place}
            onChange={setSelectedName_place}
          />
        </div>
        {/* Tableau des lieux */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nom du lieu</th>
              <th>Image</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Description</th>
              <th>Carte</th>
              <th>Distance (km)</th>
              <th>Difficulté</th>
              <th>Temps estimé</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlaces.map((place) => (
              <tr key={place.id}>
                <td>{place.name_place}</td>
                <td>
                  {/* <img
                    src={place.image_place}
                    alt={place.name_place}
                    width="75px"
                  /> */}
                </td>
                <td>{place.longitude_place}</td>
                <td>{place.latitude_place}</td>
                <td>{place.description_place}</td>
                <td>
                   <MapContainer
                     style={{ height: "200px", width: "100%" }}
                     center={[place.latitude_place, place.longitude_place]}
                     zoom={13}
                     scrollWheelZoom={false}
                   >
                     <TileLayer
                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                     />
                     {/* <Marker position={[place.latitude_place, place.longitude_place]}> */}
                     <Marker
                       position={[place.latitude_place, place.longitude_place]}
                       icon={customIcon} // Use the custom icon here
                     >
                       <Popup>{place.name_place}</Popup>
                     </Marker>
                   </MapContainer>
                 </td>
                <td>{place.distance_place}</td>
                <td>{place.difficulty_place}</td>
                <td>{place.estimated_time_place}</td>
                <td>
                  <Link
                    to={`/place/edit/${place.id}`}
                    className="btn btn-success me-2"
                  >
                    Modifier
                  </Link>

                  <Link
                    to={`/place/${place.id}`}
                    className="btn btn-success me-2"
                  >
                    Show
                  </Link>

                  <Button
                    variant="danger"
                    onClick={() => deletePlace(place.id)}
                  >
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
       
        <Footer />
      </div>
    </div>
  );
};

export default Place;
