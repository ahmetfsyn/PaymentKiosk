import { Route, Routes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import UserRoutes from "./CustomerRoutes";
import NotFound from "@/pages/NotFound";
import Welcome from "@/pages/Welcome";
import AdminRoutes from "./AdminRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthRoutes />}></Route>

      <Route path="admin" element={<AdminRoutes />}></Route>

      <Route path="customer" element={<UserRoutes />}></Route>

      <Route path="/" element={<Welcome />}></Route>

      <Route path="/*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRouter;
