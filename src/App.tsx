import { BrowserRouter, Routes, Route } from "react-router";
import About from "./pages/Abot/main/page";
import Dashboard from "./pages/Dashboard/main/page";
import Home from "./pages/Home/main/page";
import Appbar from "./Components/Appbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-6xl font-bold text-gray-800">404</h1>
    <h2 className="text-3xl font-bold text-gray-600 mt-4">Page Not Found</h2>
    <p className="text-gray-500 mt-2">
      The page you're looking for doesn't exist.
    </p>
  </div>
);
