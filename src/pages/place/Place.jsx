import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Menu from "../../components/Menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FilterDropdown from "../../components/FilterDropdown";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Place = () => { 
  const [place, setPlace] = useState([]); 
  const [name_place, setName_place] = useState([]);
  const [selectedName_place, setSelectedName_place] = useState(null);

  useEffect(() => {
    displayPlace();
  }, []);

  const displayPlace = async () => {
    await axios.get("http://127.0.0.1:8000/api/place").then((res) => {
      setPlace(res.data); // Utilisation de "data" depuis la réponse de l'API
      setName_place(res.data.map(place => place.name_place));
    });
  };

  const deletePlace = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/place/${id}`).then(displayPlace);
  };

  const filteredPlaces = place.filter((place) => {
    return (
      !selectedName_place || place.name_place === selectedName_place
    );
  });

  return (
    <div>
      <Menu />
      <div className="container mt-5">
        <div className="d-flex justify-content-between mb-3">
          <FilterDropdown
            items={name_place}
            selectedItem={selectedName_place}
            onChange={setSelectedName_place}
          />
        </div>
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
                  <img 
                    src={place.image_place} 
                    alt={place.name_place} 
                    width="75px" 
                  /> 
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
                    <Marker position={[place.latitude_place, place.longitude_place]}>
                      <Popup>{place.name_place}</Popup>
                    </Marker>
                  </MapContainer>
                </td>
                <td>{place.distance_place}</td> 
                <td>{place.difficulty_place}</td> 
                <td>{place.estimated_time_place}</td> 
                <td>
                  <Link to={`/place/edit/${place.id}`} className="btn btn-success me-2"> 
                    Modifier 
                  </Link>
                  <Button 
                    variant="danger" 
                    onClick={() => { 
                      deletePlace(place.id); 
                    }} 
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
