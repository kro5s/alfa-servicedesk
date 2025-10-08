import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedLayout from "./components/ProtectedLayout/ProtectedLayout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";

function App() {
  return (
    <Routes>
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/registration"} element={<div>registration</div>} />

      <Route path={"/"} element={<ProtectedLayout />}>
        <Route path={"/"} element={<div>Main page</div>} />
        <Route path={"/*"} element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}

export default App;
