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
              <span className="relative block h-5.5 w-5.5 cursor-pointer">
                <span className="du-block absolute right-0 h-full w-full">
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-[0] duration-200 ease-in-out ${
                      !props.sidebarOpen && "!w-full delay-300"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-150 duration-200 ease-in-out ${
                      !props.sidebarOpen && "delay-400 !w-full"
                    }`}
                  ></span>
                  <span
                    className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-white delay-200 duration-200 ease-in-out ${
                      !props.sidebarOpen && "!w-full delay-500"
                    }`}
                  ></span>
                </span>
                <span className="absolute right-0 h-full w-full rotate-45">
                  <span
                    className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-white delay-300 duration-200 ease-in-out ${
                      !props.sidebarOpen && "!h-0 !delay-[0]"
                    }`}
                  ></span>
                  <span
                    className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-white duration-200 ease-in-out ${
                      !props.sidebarOpen && "!h-0 !delay-200"
                    }`}
                  ></span>
                </span>
              </span>
            </button>
          </div>

          <div className="md:block hidden">
            <Link className="block flex-shrink-0" to="/">
              <img className="w-40" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="flex items-center gap-3 2xsm:gap-7">
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
