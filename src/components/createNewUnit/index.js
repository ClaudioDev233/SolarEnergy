import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../checkbox";

import Inputs from "../inputs";
import { Titulo, Container, Form, SubmitButton } from "./styles";

export default function CreateNewUnit() {
  const [nickname, setNickname] = useState("");
  const [local, setLocal] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [active, setActive] = useState("");
  const [error, setError] = useState("");
  const redirect = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    nickname === "" || local === "" || brand === "" || model === ""
      ? setError("Campo Requerido")
      : axios
          .post("http://localhost:3001/unidades", {
            apelido: nickname,
            local: local,
            marca: brand,
            modelo: model,
            ativo: active,
          })
          .then(redirect("/unitList"));
  }

  return (
    <>
      <Container>
        <Titulo>Cadastro de Unidade Geradora</Titulo>
        <Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Inputs
            label="Apelido"
            placeholder="Painel 1"
            type="text"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            errorMessage={nickname === "" ? error : <></>}
          ></Inputs>
          <Inputs
            label="Local"
            placeholder="Rua Alberto 430"
            type="text"
            onChange={(e) => {
              setLocal(e.target.value);
            }}
            errorMessage={local === "" ? error : <></>}
          ></Inputs>

          <Inputs
            label="Marca"
            placeholder="Resun"
            type="text"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
            errorMessage={brand === "" ? error : <></>}
          ></Inputs>
          <Inputs
            label="Modelo"
            placeholder="150w"
            type="text"
            onChange={(e) => {
              setModel(e.target.value);
            }}
            errorMessage={model === "" ? error : <></>}
          ></Inputs>

          <Checkbox
            label="Ativo"
            type="checkbox"
            onChange={(e) => {
              setActive(e.target.checked);
            }}
          ></Checkbox>
          <SubmitButton type="submit" value="Salvar"></SubmitButton>
        </Form>
      </Container>
    </>
  );
}
