import React, { useEffect, useState } from "react"; 
import Table from "react-bootstrap/Table"; 
import Button from "react-bootstrap/Button"; 
import Menu from "../../components/Menu"; 
import axios from "axios"; 
import { Link } from "react-router-dom";

const Place = () => { 
  const [places, setPlaces] = useState([]); 

  useEffect(() => { 
    displayPlaces(); 
  }, []); 

  const displayPlaces = async () => { 
    await axios.get("http://127.0.0.1:8000/api/place").then((res) => { 
      setPlaces(res.data.data); // Utilisation de "data" depuis la réponse de l'API
    }); 
  }; 

  const deletePlace = (id) => { 
    axios.delete(`http://127.0.0.1:8000/api/place/${id}`).then(displayPlaces); 
  };

  return ( 
    <div> 
      <Menu /> 
      <div className="container mt-5"> 
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
            {places.map((place) => ( 
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
                  <a href={place.map_place} target="_blank" rel="noopener noreferrer">
                    Voir la carte
                  </a>
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
      </div> 
    </div> 
  ); 
}; 

export default Place;
