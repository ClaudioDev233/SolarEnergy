import NavMenu from "../../components/menu";
import axios from "axios";
import { useState, useEffect } from "react";
export default function PowerGeneration() {
  const [data, setData] = useState([]);

  const [month, setMonth] = useState("");
  const [energy, setEnergy] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    async function getData() {
      await axios.get("http://localhost:3001/unidades").then((resp) => {
        const dataFiltered = resp.data.filter(
          (unidade) => unidade.ativo === true
        );
        setData(dataFiltered);
      });
    }
    getData();
  }, []);

  async function handlePostData() {
    axios.post("http://localhost:3001/geracoes/", {
      unidade_id: id,
      energia_gerada: energy,
      mes: month,
    });
  }

  // validação

  function handleSubmit(e) {
    e.preventDefault();
    handlePostData();
  }

  return (
    <>
      <p>LANÇAMENTO DE GERAÇÃO MENSAL</p>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          Unidade Geradora
          <select
            defaultValue=""
            onChange={(e) => {
              setId(e.target.value);
            }}
          >
            <option value="" disabled>
              Selecione
            </option>
            {data.map((unidade) => {
              return <option value={unidade.id}>{unidade.apelido}</option>;
            })}
          </select>
        </label>
        <label>
          Mes/Ano
          <input type="date" onChange={(e) => setMonth(e.target.value)}></input>
        </label>
        <label>
          Total Kw Gerado
          <input
            type="text"
            onChange={(e) => setEnergy(e.target.value)}
          ></input>
        </label>
        <input type="submit" value="Cadastrar"></input>
      </form>
    </>
  );
}
