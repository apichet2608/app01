import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Layout from "./layout";
import { Route_Path } from "./Route";

interface Route_Path {
  path: string;
  element: React.ReactNode;
}

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/app" replace />} />
            {Route_Path.map((route: Route_Path, index: number) => {
              return (
                <Route key={index} path={route.path} element={route.element} />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
