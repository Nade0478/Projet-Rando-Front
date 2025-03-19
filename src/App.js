import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Blog from "./pages/Blog"; 
import Home from "./pages/Home"; 
import Contact from "./pages/Contact";
import AdminProfil from "./pages/admin/AdminProfil";
// import AddUser from "./pages/Admin/AddUser";
// import UserEdit from "./pages/Admin/UserEdit";

import DashboardPage from "./pages/admin/Dashboard";

import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";

import Article from "./pages/article/Article";
import AddArticle from "./pages/article/AddArticle";
import EditArticle from "./pages/article/EditArticle";

import Opinion from "./pages/opinion/Opinion";
import AddOpinion from "./pages/opinion/AddOpinion";
import EditOpinion from "./pages/opinion/EditOpinion";

import Category from "./pages/category/Category";
import AddCategory from "./pages/category/AddCategory";
import EditCategory from "./pages/category/EditCategory";

import Place from "./pages/place/Place";
import AddPlace from "./pages/place/AddPlace";
import EditPlace from "./pages/place/EditPlace";
import ShowPlace from "./pages/place/ShowPlace";

import Profil from "./pages/Profil";

import Role from "./pages/Role";


const App = () => { 
  return ( 
    <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} /> 

          <Route path="/article" element={<Article />} /> 
          <Route path="/article/Add" element={<AddArticle />} /> 
          <Route path="/article/Edit/:article" element={<EditArticle />} /> 

          <Route path="/category" element={<Category />} /> 
          <Route path="/category/Add" element={<AddCategory />} /> 
          <Route path="/Category/Edit/:category" element={<EditCategory />} /> 

          <Route path="/Place" element={<Place />} /> 
          <Route path="/Place/Add" element={<AddPlace />} /> 
          <Route path="/place/Edit/:place" element={<EditPlace />} /> 
          <Route path="/place/show/:id" element={<ShowPlace />} /> {/* Route vers ShowPlace */}
          <Route path="/opinion" element={<Opinion />} /> 
          <Route path="/opinion/Add" element={<AddOpinion />} /> 
          <Route path="/opinion/Edit/:opinion" element={<EditOpinion />} /> 

          <Route path="/dashboard" element={<DashboardPage />} /> 

          <Route path="/" element={<Login />} />
          <Route path="/adminProfil" element={<AdminProfil />} />
          <Route path="/profil" element={<Profil />} />

          <Route path="/role" element={<Role />} />

          {/* Auth routes */}
          {/* <Route path="/Auth/Register" element={<Register />} /> 
          <Route path="/Auth/Login" element={<Login />} />  */}

          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="*" element={<Home />} /> 
        </Routes> 
    </BrowserRouter> 
  ); 
}; 
 
export default App;
