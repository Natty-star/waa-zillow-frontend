import React from "react";
import { Route, Routes } from "react-router-dom";
import Properties from "../components/properties/Properties";
import Login from "../components/UserManagment/Login";
import SignUp from "../components/UserManagment/SignUp";
import PropertyDetail from "../components/properties/customer/propertyDetail/PropertyDetail";
import Orders from "../components/order/owner/orders/Orders";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ForgotPassword from "../components/UserManagment/ForgotPassword";

import AddProperty from "../components/properties/customer/addProperty/AddProperty";
import OwnerLists from "../components/Admin/OwnerLists/OwnerLists";

// import AddProperty from "../components/properties/customer/addProperty/AddProperty";

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

      <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/addProperties" element={<AddProperty />} />
      <Route path="/uses" element={<OwnerLists />} />
    </Routes>
  );
}
