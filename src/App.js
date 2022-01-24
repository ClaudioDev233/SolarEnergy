import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import GlobalStyles from "./components/globalStyles";
import SolarPanel from "./components/loginImage";
function App() {
  return (
    <>
      <GlobalStyles>
        <SolarPanel></SolarPanel>
        <Login></Login>
      </GlobalStyles>
    </>
  );
}

export default App;
