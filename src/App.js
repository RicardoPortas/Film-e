import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { Routes, Route } from "react-router-dom";
import Gestores from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Equipe from "./scenes/equipe";
import Actions from "./scenes/equipe/actions.jsx";
import Calendar from "./scenes/calendar";
//import Bar from "./scenes/bar";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
//import Geography from "./scenes/geography";


function App() {
    const [theme, colorMode] = useMode();

    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/team" element={<Gestores />} /> 
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} /> 
              <Route path="/form" element={<Form />} /> 
              <Route path="/equipe" element={<Equipe />} /> 
              <Route path="/user/:_id" element={<Actions />} /> 
              <Route path="/calendar" element={<Calendar />} /> 

              { /* <Route path="/bar" element={<Bar />} /> */ }
              { /* <Route path="/pie" element={<Pie />} /> */ }
              { /* <Route path="/line" element={<Line />} /> */ }
              { /* <Route path="/geography" element={<Geography />} /> */ }
            </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default App;
