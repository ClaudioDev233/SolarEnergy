import { NavBar } from "./styles";
import { useNavigate } from "react-router-dom";

export default function NavMenu() {
  const history = useNavigate();

  return (
    <>
      <NavBar>
        <p>Logo</p>
        <ul>
          <li onClick={() => history("/dashboard")}>Dashboard</li>

          <li onClick={() => history("/unitList")}>Unidades </li>

          <li onClick={() => history("/unitSignUp")}>
            Cadastro de energia gerada
          </li>
        </ul>
      </NavBar>
    </>
  );
}
