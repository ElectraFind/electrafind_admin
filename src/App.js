import React,{ useEffect, useState } from "react";
import { Routes, Route ,useNavigate} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import AdminLogin from "./components/AdminLogin";
import AdminSignup from "./components/AdminSignup";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  
  // const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/admin/login");
  // }
  // }, [isAuthenticated, navigate]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> 
        <CssBaseline />
        <div className="app">
          {/* {isAuthenticated && <Sidebar isSidebar={isSidebar} />} */}
          <main className="content">
          {/* {isAuthenticated && <Topbar setIsSidebar={setIsSidebar} />} */}
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
             
              <Route path="/admin/login" element={<AdminLogin />}/>
              <Route path="admin/signup" element={<AdminSignup/>}/>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
