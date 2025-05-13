// import { useNavigate } from "react-router-dom";

// const Appbar = () => {
//   const navigate = useNavigate();

//   const navigate_to = (path: string) => {
//     navigate(path);
//   };

//   return (
//     <div className="flex gap-2 bg-slate-600 justify-between">
//       <div className="flex gap-2">
//         <div className="">😈</div>
//         <button onClick={() => navigate_to("/")}>Home</button>
//         <div onClick={() => navigate_to("/about")}>About</div>
//         <div onClick={() => navigate_to("/dashboard")}>Dashboard</div>
//       </div>
//       <div className="flex gap-2">
//         <div>🏭</div>
//         <div>👤</div>
//       </div>
//     </div>
//   );
// };
// export default Appbar;
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate();

  const navigate_to = (path: string) => {
    navigate(path);
  };

  return (
    <div className="grid grid-cols-2 gap-4 bg-slate-600 p-2">
      <div className="grid grid-flow-col gap-4 justify-start">
        <div className="">😈</div>
        <button onClick={() => navigate_to("/")}>Home</button>
        <div onClick={() => navigate_to("/about")}>About</div>
        <div onClick={() => navigate_to("/dashboard")}>Dashboard</div>
      </div>
      <div className="grid grid-flow-col gap-4 justify-end">
        <div>🏭</div>
        <div>👤</div>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Appbar;
