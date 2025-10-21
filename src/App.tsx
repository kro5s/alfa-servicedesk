import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout/ProtectedLayout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import SidebarLayout from "./components/SidebarLayout/SidebarLayout.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import NewRequestPage from "./pages/NewRequestPage/NewRequestPage.tsx";
import MyRequestsPage from "./pages/MyRequestsPage/MyRequestsPage.tsx";
import RequestPage from "./pages/RequestPage/RequestPage.tsx";

function App() {
  return (
    <Routes>
      <Route path={"/login"} element={<LoginPage />} />

      <Route element={<ProtectedLayout />}>
        <Route element={<SidebarLayout />}>
          <Route path={"/profile"} element={<ProfilePage />} />
          <Route path={"/new-request"} element={<NewRequestPage />} />
          <Route path={"/requests"} element={<MyRequestsPage />} />
          <Route path={"/requests/:id"} element={<RequestPage />} />
          <Route path={"/*"} element={<Navigate to={"/new-request"} />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
