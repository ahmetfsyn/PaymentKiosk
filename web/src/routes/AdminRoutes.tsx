import Dashboard from "@/pages/admin/Dashboard";
import { Route, Routes } from "react-router";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    </Routes>
  );
};

export default AdminRoutes;
