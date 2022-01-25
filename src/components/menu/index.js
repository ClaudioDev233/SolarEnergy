import { NavBar } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Menu() {
  const [navigation, setNavigation] = useState("dashboard");

  return (
    <>
      <NavBar>
        <p>Logo</p>
        <ul>
          <li>Dashboard {setNavigation("dashboard")}</li>
          <li>Unidades {setNavigation("dashboard")}</li>
          <li>Cadastro de energia gerada {setNavigation("dashboard")}</li>
        </ul>
      </NavBar>
    </>
  );
}
