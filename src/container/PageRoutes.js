import React from "react";
import { Route, Routes } from "react-router-dom";
import Properties from "../components/properties/Properties";
import Property from "../components/properties/property/Property";
import Login from "../components/UserManagment/Login";
import SignUp from "../components/UserManagment/SignUp";
import PropertyDetail from "../components/properties/propertyDetail/PropertyDetail";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Properties />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/properties" element={<Properties />} />
      <Route />
    </Routes>
  );
}
