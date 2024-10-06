import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { TbLogout2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import placeholderImg from "../../../assets/placeholder.jpg";
import { useAuth } from "../../../hooks/useAuth";
import ClickOutside from "../../utils/ClickOutside";

const DropdownUser = () => {
  const { user, setUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogOut = function () {
    if (setUser) setUser(null);
    localStorage.removeItem("loggedUser");
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)}>
      <div className="relative">
        <Link
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-4"
          to="#"
        >
          <span className="hidden text-right lg:block">
            <span className="block font-medium text-white">{user?.name}</span>
          </span>
          <span className="h-12 w-12 rounded-full overflow-hidden">
            <img src={user?.profileImage || placeholderImg} alt="User" />
          </span>
          <IoIosArrowDown color="white" size={20} />
        </Link>
        {/* <!-- Dropdown Start --> */}
        {dropdownOpen && (
          <div
            className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-md border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark`}
          >
            <ul className="flex flex-col border-b border-stroke mb-2 pb-2 dark:border-strokedark">
              <li>
                <Link
                  to="/profile"
                  className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium rounded-md duration-300 ease-in-out hover:bg-secondary hover:text-black lg:text-base"
                >
                  <FaRegUser size={18} />
                  <p>My Profile</p>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium rounded-md duration-300 ease-in-out hover:bg-secondary hover:text-black lg:text-base"
                >
                  <GoGear size={18} />
                  <p>Settings</p>
                </Link>
              </li>
            </ul>
            <button
              onClick={handleLogOut}
              className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium rounded-md duration-300 ease-in-out hover:bg-danger hover:text-white lg:text-base"
            >
              <TbLogout2 size={20} />
              <p>Log Out</p>
            </button>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default DropdownUser;
