import { Outlet } from "react-router-dom";
import Appbar from "./Components/Appbar";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Appbar />
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
