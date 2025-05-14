import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  const navigate_to = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 px-4 py-2 text-white">
      <div className="flex gap-4 items-center">
        <div className="text-xl">😈</div>
        <button onClick={() => navigate_to("/app")} className="hover:underline">
          Home
        </button>
        <div
          onClick={() => navigate_to("/app/dashboard")}
          className="cursor-pointer hover:underline"
        >
          Dashboard
        </div>
        <div
          onClick={() => navigate_to("/app/testnotfound")}
          className="cursor-pointer hover:underline"
        >
          ❌
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="btn">🏭</div>
        <div className="btn">👤</div>
      </div>
    </div>
  );
};
export default Appbar;
