import React from "react"; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

import Blog from "./pages/Blog"; 
import Home from "./pages/Home"; 
import Contact from "./pages/Contact";
import User from "./pages/admin/AdminProfil";
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
import ShowPlace from "./pages/place/ShowPlace";

import UserProfil from "./pages/UserProfil";

import Role from "./pages/Role";

import UserPage from "./components/UserPage";
import AdminProfil from "./pages/admin/AdminProfil";

const App = () => { 
  return ( 
    <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/blog" element={<Blog />} /> 
          <Route path="/contact" element={<Contact />} /> 

          <Route path="/article" element={<Article />} /> 
          <Route path="/article/add" element={<AddArticle />} /> 
          <Route path="/article/edit/:article" element={<EditArticle />} /> 

          <Route path="/category" element={<Category />} /> 
          <Route path="/category/add" element={<AddCategory />} /> 
          <Route path="/category/edit/:category" element={<EditCategory />} /> 

          <Route path="/place" element={<Place />} /> 
          <Route path="/place/add" element={<AddPlace />} /> 
          <Route path="/place/edit/:place" element={<EditPlace />} /> 
          <Route path="/place/show/:id" element={<ShowPlace />} /> {/* Route vers ShowPlace */}
          <Route path="/opinion" element={<Opinion />} /> 
          <Route path="/opinion/add" element={<AddOpinion />} /> 
          <Route path="/opinion/edit/:opinion" element={<EditOpinion />} /> 

          <Route path="/dashboard" element={<DashboardPage />} /> 
          <Route path="/userprofil" element={<UserProfil />} /> 
          <Route path="/user" element={<User />} /> 

          <Route path="/" element={<Login />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/adminprofil" element={<AdminProfil />} />

          <Route path="/role" element={<Role />} />

          {/* Auth routes */}
          {/* <Route path="/Auth/Register" element={<Register />} /> 
          <Route path="/Auth/Login" element={<Login />} />  */}

          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="*" element={<Home />} /> 
        </Routes> 
    </BrowserRouter> 
  ); 
}; 
 
export default App;
