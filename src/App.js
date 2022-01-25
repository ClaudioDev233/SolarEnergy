import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
