import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [text, setText] = useState("Hello World"); // count = 0 เริ่มต้น
  const [button_textt, setButton_text] = useState("Click Me");

  const handle_Change = (e) => {
    console.log(e);
    setText(e.target.value);
  };

  const handle_Click = (string: string) => {
    console.log(string);
    setButton_text(string);
  };
  // https://jsonplaceholder.typicode.com/todos/

  const [data, setdata] = useState();

  const Call_API = async () => {
    // const response = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos/"
    // );
    // setdata(response.data);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      setdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [isActive, setIsActive] = useState("");
  const handleMenuClick = (string: string) => {
    setIsActive(string);
  };

  useEffect(() => {
    // Call_API();
    console.log("useEffect");
  }, []);

  useEffect(() => {
    // Call_API();
    console.log("TEST");
    Call_API();
  }, [text]);

  useEffect(() => {
    // Call_API();
    console.log("button_textt");
  }, [button_textt]);
  return (
    <div className="container mx-auto pt-2">
      <button
        className={`btn 
          ${
            isActive === "BT1"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } 
            px-4 py-2 rounded-md transition-colors duration-200 ease-in-out mr-2`}
        onClick={() => handleMenuClick("BT1")}
      >
        Menu
      </button>
      <button
        className={`btn ${
          isActive === "BT2"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        } px-4 py-2 rounded-md transition-colors duration-200 ease-in-out mr-2`}
        onClick={() => handleMenuClick("BT2")}
      >
        Menu
      </button>
      <input
        type="text"
        value={text}
        onChange={handle_Change}
        id="input_text"
      />
      <button className="btn btn-primary" onClick={() => Call_API()}>
        CALL API
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handle_Click("TEST CLICK")}
      >
        {button_textt}
      </button>
      {/* table */}
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: string, index: number) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.userId}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
