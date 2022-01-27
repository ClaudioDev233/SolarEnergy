import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function EditUnit() {
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
        .get(`http://localhost:3333/unidades/${params.id}`)
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
    axios.put(`http://localhost:3333/unidades/${params.id}`, {
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
      <h1>Editando Uma Unidade</h1>
      <form
        onSubmit={(e) => {
          handleEdit(e);
        }}
      >
        <label>
          Apelido
          <input
            type="text"
            value={nickname || ""}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Local
          <input
            type="text"
            value={local || ""}
            onChange={(e) => {
              setLocal(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Marca
          <input
            type="text"
            value={brand || ""}
            onChange={(e) => {
              setBrand(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Modelo
          <input
            type="text"
            value={model || ""}
            onChange={(e) => {
              setModel(e.target.value);
            }}
          ></input>
        </label>
        <label>
          Ativo
          <input
            type="checkbox"
            checked={active || ""}
            onChange={(e) => {
              setActive(e.target.checked);
            }}
          ></input>
        </label>
        <input type="submit" value="Editar"></input>
      </form>
    </>
  );
}
