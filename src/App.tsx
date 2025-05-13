import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard/main/page";
import Home from "./pages/Home/main/page";
import NotFound from "./pages/Notfound/main/page";
import Layout from "./layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/app" replace />} />
            <Route path="/app" element={<Home />} />
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
