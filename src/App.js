import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Blog from "./pages/Blog"; 
import Home from "./pages/Home"; 
import Contact from "./pages/Contact";
import User from "./pages/admin/User";
// import AddUser from "./pages/Admin/AddUser";
// import UserEdit from "./pages/Admin/UserEdit";

import DashboardPage from "./pages/admin/DashboardPage";

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
import UserProfil from "./pages/UserProfil";


const App = () => { 
  return ( 
    <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/Blog" element={<Blog />} /> 
          <Route path="/Contact" element={<Contact />} /> 

          <Route path="/Article" element={<Article />} /> 
          <Route path="/Article/Add" element={<AddArticle />} /> 
          <Route path="/Article/Edit/:article" element={<EditArticle />} /> 

          <Route path="/Category" element={<Category />} /> 
          <Route path="/Category/Add" element={<AddCategory />} /> 
          <Route path="/Category/Edit/:category" element={<EditCategory />} /> 

          <Route path="/Place" element={<Place />} /> 
          <Route path="/Place/Add" element={<AddPlace />} /> 
          <Route path="/Place/Edit/:place" element={<EditPlace />} /> 

          <Route path="/Opinion" element={<Opinion />} /> 
          <Route path="/Opinion/Add" element={<AddOpinion />} /> 
          <Route path="/Opinion/Edit/:opinion" element={<EditOpinion />} /> 

          <Route path="/Dashboard" element={<DashboardPage />} /> 
          <Route path="/User" element={<UserProfil />} /> 
          <Route path="/user" element={<User />} /> 

          {/* <Route path="/User/Add" element={<AddUser />} />  */}
          {/* <Route path="/User/Edit/:user" element={<EditUser />} />  */}
          <Route path="/User" element={<User />} />

          {/* Auth routes */}
          {/* <Route path="/Auth/Register" element={<Register />} /> 
          <Route path="/Auth/Login" element={<Login />} />  */}

          <Route path="/Terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Register" element={<Register />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="*" element={<Home />} /> 
        </Routes> 
    </BrowserRouter> 
  ); 
}; 
 
export default App;
