import logo1 from "../../assets/images/logo1.png";
import SolarPanel from "../loginImage";
import { LoginSection, LoginForm } from "./styles";

export default function Login() {
  return (
    <>
      <LoginSection>
        <img src={logo1}></img>
        <p>Seja Bem Viado</p>
        <LoginForm>
          <input placeholder="Email"></input>
          <input type="password" placeholder="Senha"></input>
          <button>Entrar</button>
        </LoginForm>
      </LoginSection>
    </>
  );
}
