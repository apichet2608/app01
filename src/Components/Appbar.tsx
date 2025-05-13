import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  const navigate_to = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex gap-2 bg-slate-600 justify-between">
      <div className="flex gap-2">
        <div className="">😈</div>
        <button onClick={() => navigate_to("/")}>Home</button>
        <div onClick={() => navigate_to("/dashboard")}>Dashboard</div>
      </div>
      <div className="flex gap-2">
        <div>🏭</div>
        <div>👤</div>
      </div>
    </div>
  );
};
export default Appbar;
