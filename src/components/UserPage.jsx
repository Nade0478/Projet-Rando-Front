import React from 'react';
import {getCurrentUser, logout} from ' ./auth/login';

const UserPage = ({onLogout}) => {
    const user = getCurrentUser();

    const handleLogout = () => {
        logout();
        onLogout();
};

if (!user)  return <p>Tu dois te connecter !.</p>;

return (
    <div>
        <h1>Bienvenue {user.username}!</h1>
        <p>Voici ton adresse email : {user.email}</p>
        <button onClick={handleLogout}>Se déconnecter</button>
    </div>
);
};

export default UserPage;