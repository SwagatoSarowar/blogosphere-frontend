import { Route, Routes } from "react-router-dom";
import AppInternalLayout from "./components/layout/AppInternalLayout/AppInternalLayout";
import NotFound from "./pages/error/NotFound";
import BlogDetails from "./pages/internal/BlogDetails";
import CreateBlog from "./pages/internal/CreateBlog";
import EditProfile from "./pages/internal/EditProfile";
import Home from "./pages/internal/Home";
import Profile from "./pages/internal/Profile";

export default function AppInternal() {
  return (
    <div>
      <AppInternalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppInternalLayout>
    </div>
  );
}
