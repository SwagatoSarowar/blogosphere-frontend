import { FaMoon } from "react-icons/fa6";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "../../../hooks/useTheme";

export const DarkModeSwitcher = function () {
  const { colorMode, setColorMode } = useTheme();

  const handleToggleColorMode = function () {
    if (setColorMode) setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <li>
      <label
        className={`relative m-0 block h-6 w-12 rounded-full ${
          colorMode === "dark" ? "bg-meta-5" : "bg-meta-6"
        }`}
      >
        <input
          type="checkbox"
          onChange={handleToggleColorMode}
          className="absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute top-1/2 left-0 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear ${
            colorMode === "dark" && "!right-[3px] !translate-x-full"
          }`}
        >
          <span className="dark:hidden">
            <IoSunnySharp color="#969AA1" />
          </span>
          <span className="hidden dark:inline-block">
            <FaMoon color="#969AA1" />
          </span>
        </span>
      </label>
    </li>
  );
};
