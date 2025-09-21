import ScanProduct from "@/pages/customer/ScanProduct";
import { Route, Routes } from "react-router";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="scan-product" element={<ScanProduct></ScanProduct>}></Route>
    </Routes>
  );
};

export default CustomerRoutes;
