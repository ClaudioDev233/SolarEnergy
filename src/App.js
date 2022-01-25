import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import PowerGeneration from "./pages/unitPowerGeneration";
import SignUp from "./pages/unitSignUp";
import UnitList from "./pages/unitList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/unitList" element={<UnitList />}></Route>
        <Route
          path="/unitPowerGeneration"
          element={<PowerGeneration />}
        ></Route>
        <Route path="/unitSignUp" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
