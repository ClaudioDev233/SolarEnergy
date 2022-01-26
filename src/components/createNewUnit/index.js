import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    axios.post("http://localhost:3333/unidades", {
      apelido: nickname,
      local: local,
      marca: brand,
      modelo: model,
      ativo: active,
    });
    redirect("/unitList");
    // colocar um navigate ?
  }

  return (
    <>
      <h1>Criando nova Unidade</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Apelido
          <input
            type="text"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Local
          <input
            type="text"
            onChange={(e) => {
              setLocal(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Marca
          <input
            type="text"
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Modelo
          <input
            type="text"
            onChange={(e) => {
              setModel(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Ativo
          <input
            type="checkbox"
            onChange={(e) => {
              setActive(e.target.checked);
            }}
          ></input>
        </label>
        <input type="submit" value="Criar!"></input>
      </form>
    </>
  );
}
