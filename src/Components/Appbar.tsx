import { useNavigate } from "react-router-dom";
import { Home, Info, LayoutDashboard, Factory, User } from "lucide-react";

const Appbar = () => {
  const navigate = useNavigate();

  const navigate_to = (path: string) => {
    navigate(path);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => navigate_to("/")}>
                <Home size={20} /> Home
              </a>
            </li>
            <li>
              <a onClick={() => navigate_to("/dashboard")}>
                <LayoutDashboard size={20} /> Dashboard
              </a>
            </li>
            <li>
              <a onClick={() => navigate_to("/factory")}>
                <Factory size={20} /> Factory
              </a>
            </li>
            <li>
              <a onClick={() => navigate_to("/about")}>
                <Info size={20} /> About
              </a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">App01</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => navigate_to("/")}>
              <Home size={20} /> Home
            </a>
          </li>
          <li>
            <a onClick={() => navigate_to("/dashboard")}>
              <LayoutDashboard size={20} /> Dashboard
            </a>
          </li>
          <li>
            <a onClick={() => navigate_to("/about")}>
              <Info size={20} /> About
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <User size={20} />
        </button>
      </div>
    </div>
  );
};

export default Appbar;
