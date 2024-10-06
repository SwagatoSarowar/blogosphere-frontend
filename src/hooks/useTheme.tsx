import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = function () {
  return useContext(ThemeContext);
};
