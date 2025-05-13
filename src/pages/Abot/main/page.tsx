import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    console.log("About mounted");
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">About Page</h1>
    </div>
  );
};

export default About;
