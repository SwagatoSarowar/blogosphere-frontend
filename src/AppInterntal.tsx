import { Route, Routes } from "react-router-dom";
import AppInternalLayout from "./components/layout/AppInternalLayout/AppInternalLayout";
import NotFound from "./pages/error/NotFound";
import Home from "./pages/internal/Home";
import Profile from "./pages/internal/Profile";

export default function AppInternal() {
  return (
    <div>
      <AppInternalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppInternalLayout>
    </div>
  );
}
