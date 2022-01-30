import { Routes, Route } from "react-router-dom";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import PowerGeneration from "./pages/unitPowerGeneration";
import EditUnit from "./pages/editUnit";
import CreateUnit from "./pages/createUnit";
import UnitList from "./pages/unitList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/unitList" element={<UnitList />}></Route>
        <Route path="/editUnit/:id" element={<EditUnit />} />
        <Route path="/createUnit/" element={<CreateUnit />} />
        <Route
          path="/unitPowerGeneration"
          element={<PowerGeneration />}
        ></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
