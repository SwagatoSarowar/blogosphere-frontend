import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import AppExternal from "./AppExternal";
import AppInternal from "./AppInterntal";
import { useAuth } from "./hooks/useAuth";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const { user } = useAuth();
  const { colorMode } = useTheme();

  useEffect(() => {
    localStorage.setItem("colorTheme", JSON.stringify(colorMode));

    const bodyClass = window.document.body.classList;

    if (colorMode === "dark") {
      bodyClass.add("dark");
    } else {
      bodyClass.remove("dark");
    }
  }, [colorMode]);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      {/* Toastify container */}
      <ToastContainer
        className="w-fit"
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme={colorMode}
      />
      {/* Taking user to internal pages only if he is logged in */}
      {user ? <AppInternal /> : <AppExternal />}
    </div>
  );
}
