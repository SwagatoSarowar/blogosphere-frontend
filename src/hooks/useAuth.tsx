import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = function () {
  return useContext(AuthContext);
};
