import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

export default function AppExternal() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/*" element={<SignIn />} />
    </Routes>
  );
}
