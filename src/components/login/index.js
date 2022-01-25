import logo1 from "../../assets/images/logo1.png";
import { useEffect, useState } from "react";
import Inputs from "../inputs";
import { useNavigate } from "react-router-dom";
import { userSchema, testeUserSchema } from "../../Validations/userValidation";
import {
  LoginContainer,
  LoginSection,
  LoginForm,
  LoginImage,
  ErrorMessage,
} from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState();
  const [senha, setSenha] = useState("");
  const [validatePassword, setValidatePassword] = useState();
  const [validate, setValidate] = useState("");

  const history = useNavigate(); // redireciona

  async function coiso(event) {
    event.preventDefault();

    let formData = {
      email: event.target[0].value,
      password: event.target[1].value,
    };
    console.log(formData.email);
    const isValid = await userSchema.isValid(formData);
    if (isValid) {
      console.log("Email ok");
      setValidateEmail("");
    } else {
      setValidateEmail("Erro no email");
    }
    const tudovalido = await testeUserSchema.isValid(formData);
    if (tudovalido) {
      console.log("senha ok");
      setValidatePassword("");
    } else {
      setValidatePassword("Erro na senha");
    }

    if (tudovalido && isValid === true) {
      console.log(email, senha);
      setValidate(true);
      history("/dashboard"); //redireciona
    } else if (tudovalido === true && isValid === false) {
      console.log("Email não é valido");
      setValidate(false);
    } else if (tudovalido === false && isValid === true) {
      console.log("senha não é valida");
      setValidate(false);
    } else {
      console.log("tá tudo errado");
      setValidate(false);
    }
  }

  useEffect(() => {
    async function handleValidation() {
      if (validate === true) {
        alert("Logando");
      }
    }
    console.log("meu validate é", validate);
    handleValidation();
  }, [validate]);

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
            <ErrorMessage>
              {validate === false ? <p>{validateEmail}</p> : <></>}
            </ErrorMessage>
            <Inputs
              type="password"
              placeholder="Senha"
              onChange={(event) => {
                setSenha(event.target.value);
              }}
            ></Inputs>
            <ErrorMessage>
              {validate === false ? <p>{validatePassword}</p> : <></>}
            </ErrorMessage>
            <Inputs type="submit" name="Olá"></Inputs>
          </LoginForm>
        </LoginSection>
      </LoginContainer>
    </>
  );
}
