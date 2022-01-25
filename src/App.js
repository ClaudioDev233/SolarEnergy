import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import PowerGeneration from "./pages/unitPowerGeneration";

import UnitList from "./pages/unitList";
import { UnitProvider } from "./context/unitContext";

function App() {
  return (
    <>
      <UnitProvider>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/unitList" element={<UnitList />}></Route>
          <Route
            path="/unitPowerGeneration"
            element={<PowerGeneration />}
          ></Route>
        </Routes>
      </UnitProvider>
    </>
  );
}

export default App;
