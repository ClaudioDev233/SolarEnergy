import logo1 from "../../assets/images/logo1.png";
import login from "../../assets/images/login.png";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { emailSchema, passwordSchema } from "../../Validations/userValidation";
import { FaRegEnvelope, FaLock } from "react-icons/fa";
import {
  LoginContainer,
  LoginSection,
  LoginForm,
  ErrorMessage,
  LoginImage,
  Container,
  Logo,
  Inputs,
  SubmitButton,
  Titulo,
} from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState();
  const [senha, setSenha] = useState("");
  const [validatePassword, setValidatePassword] = useState();
  const [validate, setValidate] = useState("");

  const history = useNavigate(); // redireciona

  async function handleLogin(event) {
    event.preventDefault();

    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    const emailIsValid = await emailSchema.isValid(formData);
    if (emailIsValid) {
      setValidateEmail("");
    } else {
      setValidateEmail("Email Inválido");
    }
    const passordValid = await passwordSchema.isValid(formData);
    if (passordValid) {
      setValidatePassword("");
    } else {
      setValidatePassword("Senha inválida");
    }

    if (passordValid && emailIsValid === true) {
      setValidate(true);
      history("/dashboard");
    } else if (passordValid === true && emailIsValid === false) {
      setValidate(false);
    } else if (passordValid === false && emailIsValid === true) {
      setValidate(false);
    } else {
      setValidate(false);
    }
  }

  useEffect(() => {
    async function handleValidation() {
      if (validate === true) {
      }
    }
    handleValidation();
  }, [validate]);

  return (
    <>
      <Container>
        <LoginImage>
          <img src={login}></img>
        </LoginImage>
        <LoginContainer>
          <LoginSection>
            <Logo src={logo1}></Logo>
            <Titulo>Seja bem vindo</Titulo>

            <LoginForm onSubmit={handleLogin}>
              <Inputs>
                <span>
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                ></input>
              </Inputs>
              <ErrorMessage>
                {validate === false ? <p>{validateEmail}</p> : <></>}
              </ErrorMessage>

              <Inputs>
                <span>
                  <FaLock></FaLock>
                </span>
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={(event) => {
                    setSenha(event.target.value);
                  }}
                ></input>
              </Inputs>
              <ErrorMessage>
                {validate === false ? <p>{validatePassword}</p> : <></>}
              </ErrorMessage>
              <SubmitButton>
                <input type="submit" value="Entrar"></input>
              </SubmitButton>
            </LoginForm>
          </LoginSection>
        </LoginContainer>
      </Container>
    </>
  );
}
