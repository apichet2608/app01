import Home from "./pages/Home/main/page";
import Dashboard from "./pages/Dashboard/main/page";
import NotFound from "./pages/Notfound/main/page";
export const Route_Path = [
  {
    path: "/app",
    element: <Home />,
  },
  {
    path: "/app/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
