import { Outlet } from "react-router-dom";
import Appbar from "./Components/Appbar";
import { useLocation } from "react-router-dom";
import { Route_Path } from "./Route";

export default function Layout() {
  const location = useLocation();
  const appbarPaths = Route_Path.filter((route) => route.path !== "*").map(
    (route) => route.path
  );
  // ["/app", "/app/dashboard"];
  const showAppbar = appbarPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {showAppbar && <Appbar />}
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
