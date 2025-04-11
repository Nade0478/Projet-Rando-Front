import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './CardDashboard.css';

const NbrUserForm = () => {
  const [users, setUsers] = useState([]);

//   const addUser = () => {
//     const newUser = `User ${users.length + 1}`;
//     setUsers([...users, newUser]);
//   };

  return (
    <div>
      <h2>Utilisateurs: {users.length}</h2>
      {/* <button onClick={addUser}>Ajouter un utilisateur</button> */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default NbrUserForm;
