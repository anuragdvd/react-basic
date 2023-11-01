import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar";
import Content from "./Content";

const AppLayout = () => {
  return (
    <div className="flex flex-wrap">
      <Navbar />
      <Content />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
