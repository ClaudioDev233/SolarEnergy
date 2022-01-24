import logo1 from "../../assets/images/logo1.png";
import { useState } from "react";
import Inputs from "../inputs";
import { userSchema, testeUserSchema } from "../../Validations/userValidation";
import { LoginContainer, LoginSection, LoginForm, LoginImage } from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function coiso(event) {
    event.preventDefault();
    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const isValid = await userSchema.isValid(formData);
    if (isValid === true) {
      console.log("Validou email");
    } else {
      console.log("errou algo ai parceiro");
    }
    const tudovalido = await testeUserSchema.isValid(formData);
    if (tudovalido === true) {
      console.log("tudo valido é", tudovalido);
    } else {
      console.log("tudo valido é", tudovalido);
    }

    if (tudovalido && isValid === true) {
      console.log("TÁ TUDO VALIDADO");
    } else if (tudovalido === true && isValid === false) {
      console.log("Email não é valido");
    } else if (tudovalido === false && isValid === true) {
      console.log("senha não é valida");
    } else {
      console.log("tá tudo errado");
    }
  }

  return (
    <>
      <LoginContainer>
        <LoginSection>
          <img src={logo1}></img>
          <p>{email}</p>
          <p>{senha}</p>
          <LoginForm onSubmit={coiso}>
            <Inputs
              type="text"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            ></Inputs>
            <Inputs
              type="password"
              placeholder="Senha"
              onChange={(event) => {
                setSenha(event.target.value);
              }}
            ></Inputs>
            <Inputs type="submit">Entrar</Inputs>
          </LoginForm>
        </LoginSection>
      </LoginContainer>
    </>
  );
}
