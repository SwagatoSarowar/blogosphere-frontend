import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { Container } from "../Container/Container";
import { DarkModeSwitcher } from "./DarkModeSwitcher";
import DropdownUser from "./DropdownUser";

export default function Navbar(props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) {
  return (
    <header className="fixed top-0 z-999 flex w-full bg-boxdark-2/40 backdrop-blur-xl shadow-[0px_5px_20px_0px_rgba(0,0,0,0.3)]">
      <Container>
        <div className="flex flex-grow items-center justify-between py-3">
          <div className="flex items-center gap-2 sm:gap-4 md:hidden">
            {/* <!-- Hamburger Toggle BTN --> */}
            <button
              aria-controls="sidebar"
              onClick={(e) => {
                e.stopPropagation();
                props.setSidebarOpen(!props.sidebarOpen);
              }}
              className="z-99999 block rounded-sm p-1.5 shadow-sm md:hidden"
            >
              <FaBars color="white" size={22} />
            </button>
          </div>

          <div className="">
            <Link className="block flex-shrink-0" to="/">
              <img className="w-40" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden items-center gap-3 2xsm:gap-7 md:flex">
            <ul className="flex items-center gap-2 2xsm:gap-4">
              <DarkModeSwitcher />
            </ul>
            <DropdownUser />
          </div>
        </div>
      </Container>
    </header>
  );
}
