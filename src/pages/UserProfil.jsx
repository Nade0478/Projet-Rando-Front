// import React, {useState} from 'react';
// import Login from './Login';
// import UserPage from '../components/UserPage';
// import { Navbar } from 'react-bootstrap';


// const UserProfil = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

//     const handleLogin = () => {
//         setIsLoggedIn(true);
//     };
//     const handleLogout = () => {
//         setIsLoggedIn(false);
//     };
//     return (
//         <div>
//             <Navbar />
//             <h1>Bienvenue sur votre profil utilisateur</h1>
//             {isLoggedIn? (
//                 <UserPage handleLogout={handleLogout} />
//             ) : (
//                 <Login handleLogin={handleLogin} />
//             )}
//         </div>
//     );
// };

// export default UserProfil;