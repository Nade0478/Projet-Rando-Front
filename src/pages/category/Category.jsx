import React, { useEffect, useState } from "react"; 
import Table from "react-bootstrap/Table"; 
import Button from "react-bootstrap/Button"; 
import Menu from "../../components/Menu"; 
import axios from "axios"; 
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import FilterDropdown from "../../components/FilterDropdown";



const Category = () => { 
  const [category, setCategory] = useState([]); 
 
  useEffect(() => { 
    displayCategory(); 
  }, []); // Sans les crochets ça tourne en boucle 
 
  const displayCategory = async () => { 
    await axios.get("http://127.0.0.1:8000/api/category").then((res) => { 
      setCategory(res.data); 
    }); 
  }; 
 
  const deleteCategory = (id) => { 
    axios.delete(`http:/127.0.0.1:8000/api/category/${id}`).then(displayCategory); 
  };
  return ( 
    <div> 
      <Menu /> 
      <div className="container mt-5"> 
        <Table striped bordered hover> 
          <thead> 
            <tr> 
              <th>Nom</th>
              <th>Actions</th> 
            </tr> 
          </thead> 
          <tbody> 
            {category.map((category) => ( 
              <tr key={category.id}> 
                <td>{category.nameCategory}</td> 
                <td> 
                    <Link to={`/category/edit/${category.id}`} className='btn btn-success me-2'> 
                    Edit 
                    </Link>
                </td> 
                <td> 
                  <Button 
                    variant="danger" 
                    onClick={() => { 
                      deleteCategory(category.id); 
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
      <Footer/>
    </div> 

  ); 
}; 
 
export default Category;
