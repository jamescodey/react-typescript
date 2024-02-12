import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Calculator from "./Pages/Calculator.tsx";
import Home from "./Pages/Home.tsx";
import JSON from "./Pages/JSON.tsx";
import Hobbies from "./Pages/Hobbies.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/json" element={<JSON />}></Route>
        <Route path="/hobbies" element={<Hobbies />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
