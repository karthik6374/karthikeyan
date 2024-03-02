import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import NaveBar from "./Components/NaveBar";
import RegisterSuccess from "./Components/RegisterSuccess";

const App = () => {
  return (
    <>
      <div style={{ textAlign: "center", color: "purple" }}>
      </div>
      <div>
        <BrowserRouter className="col col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <NaveBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
