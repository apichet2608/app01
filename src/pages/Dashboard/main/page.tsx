import { useEffect } from "react";

const Dashboard = () => {
  useEffect(() => {
    console.log("Dashboard mounted");
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Dashboard Page</h1>
    </div>
  );
};

export default Dashboard;
