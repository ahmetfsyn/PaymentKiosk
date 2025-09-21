import ScanProduct from "@/pages/customer/ScanProduct";
import React from "react";
import { Route, Routes } from "react-router";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/scan-product" element={<ScanProduct></ScanProduct>}></Route>
    </Routes>
  );
};

export default UserRoutes;
