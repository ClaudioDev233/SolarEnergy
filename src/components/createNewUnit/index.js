import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import Inputs from "../inputs";
import { Titulo, Container, Form } from "./styles";

export default function CreateNewUnit() {
  const [nickname, setNickname] = useState("");
  const [local, setLocal] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [active, setActive] = useState("");

  const redirect = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("estou aqui");
    axios
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
          {/* <label>
            Apelido
            <input
              type="text"
              onChange={(e) => {
                setNickname(e.target.value);
              }}
            ></input> */}

          <Inputs
            label="Apelido"
            placeholder="Painel 1"
            type="text"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></Inputs>
          <Inputs
            label="Local"
            placeholder="Rua Alberto 430"
            type="text"
            onChange={(e) => {
              setLocal(e.target.value);
            }}
          ></Inputs>

          <Inputs
            label="Marca"
            placeholder="Resun"
            type="text"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></Inputs>
          <Inputs
            label="Modelo"
            placeholder="150w"
            type="text"
            onChange={(e) => {
              setModel(e.target.value);
            }}
          ></Inputs>

          {/* mudar o input checkbox */}
          <Inputs
            label="Ativo"
            type="checkbox"
            onChange={(e) => {
              setActive(e.target.value);
            }}
          ></Inputs>
          <Inputs type="submit" value="Salvar"></Inputs>
        </Form>
      </Container>
    </>
  );
}
