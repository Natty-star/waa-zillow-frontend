import React from "react";
import { Route, Routes } from "react-router-dom";
import Properties from "../components/properties/Properties";
import Property from "../components/properties/customer/property/Property";
import Login from "../components/UserManagment/Login";
import SignUp from "../components/UserManagment/SignUp";
import PropertyDetail from "../components/properties/customer/propertyDetail/PropertyDetail";
import Orders from "../components/order/owner/orders/Orders";
import ForgotPassword from "../components/UserManagment/ForgotPassword";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Properties />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/properties" element={<Properties />}></Route>
      <Route path="/properties/:id" element={<PropertyDetail />} />
      <Route />
      <Route path="/orders" element={<Orders />} />
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
    </Routes>
  );
}
