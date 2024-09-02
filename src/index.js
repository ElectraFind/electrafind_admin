import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AdminLogin from "./components/AdminLogin";

import { BrowserRouter ,Routes,Route} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/" element={<App />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
