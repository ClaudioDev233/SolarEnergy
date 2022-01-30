import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Inputs from "../inputs";
import { Titulo, Container, Form, SubmitButton } from "./styles";
import axios from "axios";
import Checkbox from "../checkbox";

export default function UnitOption() {
  const redirect = useNavigate();
  const params = useParams();

  const [data, setData] = useState("");

  const [nickname, setNickname] = useState("");
  const [local, setLocal] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    function getData() {
      axios
        .get(`http://localhost:3001/unidades/${params.id}`)
        .then((resp) => setData(resp.data));
    }
    getData();
  }, []);

  useEffect(() => {
    function handleDataValues() {
      setNickname(data.apelido);
      setLocal(data.local);
      setBrand(data.marca);
      setModel(data.modelo);
      setActive(data.ativo);
    }
    handleDataValues();
  }, [data]);

  function handleEdit(e) {
    e.preventDefault();
    axios.put(`http://localhost:3001/unidades/${params.id}`, {
      apelido: nickname,
      local: local,
      marca: brand,
      modelo: model,
      ativo: active,
    });
    redirect("/unitList");
  }

  return (
    <>
      <Container>
        <Titulo>Editar Unidade</Titulo>
        <Form
          onSubmit={(e) => {
            handleEdit(e);
          }}
        >
          <Inputs
            label="Apelido"
            value={nickname || ""}
            type="text"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></Inputs>

          <Inputs
            label="Local"
            value={local || ""}
            type="text"
            onChange={(e) => {
              setLocal(e.target.value);
            }}
          ></Inputs>
          <Inputs
            label="Marca"
            value={brand || ""}
            type="text"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></Inputs>

          <Inputs
            label="Modelo"
            value={model || ""}
            type="text"
            onChange={(e) => {
              setModel(e.target.value);
            }}
          ></Inputs>
          <Checkbox
            label="Ativo"
            type="checkbox"
            checked={active || ""}
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
