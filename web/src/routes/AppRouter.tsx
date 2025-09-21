import { Route, Routes } from "react-router";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";
import NotFound from "@/pages/NotFound";
import Welcome from "@/pages/Welcome";
import AdminRoutes from "./AdminRoutes";
import BaseLayout from "@/layouts/BaseLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />}></Route>

      <Route path="admin/*" element={<AdminRoutes />}></Route>

      <Route
        path="customer/*"
        element={
          <BaseLayout>
            <CustomerRoutes />
          </BaseLayout>
        }
      ></Route>

      <Route
        path="/"
        element={
          <BaseLayout>
            <Welcome />
          </BaseLayout>
        }
      ></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default AppRouter;
