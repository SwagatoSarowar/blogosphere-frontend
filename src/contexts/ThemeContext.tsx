import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface ThemeContextProps {
  colorMode: "light" | "dark";
  setColorMode: Dispatch<SetStateAction<"light" | "dark">> | null;
}

export const ThemeContext = createContext<ThemeContextProps>({
  colorMode: "dark",
  setColorMode: null,
});

let colorTheme: "light" | "dark" = "light";

if (localStorage.getItem("colorTheme")) {
  colorTheme = JSON.parse(localStorage.getItem("colorTheme") as string);
}

export const ThemeProvider = function ({ children }: { children: ReactNode }) {
  const [colorMode, setColorMode] = useState(colorTheme);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
