import React from "react";
import { Route, Routes } from "react-router-dom";
import Properties from "../components/properties/Properties";
// import Property from '../components/properties/property/Property'
import Property from "../components/properties/property/Property";

// import

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Properties />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/properties" element={<Properties />} />
      <Route />
    </Routes>
  );
}
